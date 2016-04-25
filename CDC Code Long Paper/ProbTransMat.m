function [probtransmat, transmat] = ProbTransMat(SeqArray, neventtypes)

if size(SeqArray,2)==1 
    transmat=zeros(neventtypes+1,neventtypes+1);
    nk=size(SeqArray,1);
    for j = 1:nk
        seqlength=size(SeqArray{j},1);
        for l = 2:seqlength
            transmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))=transmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))+1;
        end
    end

    probtransmat=zeros(size(transmat));
    for j = 1:neventtypes+1
        if length(find(transmat(j,:))) > 0
            probtransmat(j,:)=transmat(j,:)/sum(transmat(j,:));
        end
    end
else
    %% Calculate absolute occurence of each transition in each cluster
    transmat=zeros(neventtypes+1,neventtypes+1);
    seqlength=size(SeqArray,1);
    for l = 2:seqlength
        transmat(SeqArray(l-1,2)+1,SeqArray(l,2))=transmat(SeqArray(l-1,2)+1,SeqArray(l,2))+1;
    end

    %% Maps occurence matrices to probability transition matrices
    probtransmat=zeros(size(transmat));
    for j = 1:neventtypes+1
        if length(find(transmat(j,:))) > 0
            probtransmat(j,:)=transmat(j,:)/sum(transmat(j,:));
        end
    end

end