function[avetimemat] = ExpTimes(SeqArray,neventtypes)

if size(SeqArray,2)==1
    transmat=zeros(neventtypes+1,neventtypes+1);
    nk=size(SeqArray,1);
    for j = 1:nk
        seqlength=size(SeqArray{j},1);
        for l = 2:seqlength
            transmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))=transmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))+1;
        end
    end
    timemat=zeros(neventtypes+1,neventtypes+1);
    nk=size(SeqArray,1);
    for j = 1:nk
        seqlength=size(SeqArray{j},1);
        for l = 2:seqlength
            timemat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))=timemat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2))+SeqArray{j}(l,4)-SeqArray{j}(l-1,4);
        end
    end
    avetimemat=timemat./(transmat+eps);
else
    transmat=zeros(neventtypes+1,neventtypes+1);
    seqlength=size(SeqArray,1);
    for l = 2:seqlength
        transmat(SeqArray(l-1,2)+1,SeqArray(l,2))=transmat(SeqArray(l-1,2)+1,SeqArray(l,2))+1;
    end
    timemat=zeros(neventtypes+1,neventtypes+1);
    seqlength=size(SeqArray,1);
    for l = 2:seqlength
        timemat(SeqArray(l-1,2)+1,SeqArray(l,2))=timemat(SeqArray(l-1,2)+1,SeqArray(l,2))+SeqArray(l,4)-SeqArray(l-1,4);
    end
    avetimemat=timemat./(transmat+eps);
end
avetimemat=avetimemat/365;
    
end