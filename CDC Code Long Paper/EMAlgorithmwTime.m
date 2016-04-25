function [posfinal, propfinal, Cmats, Cmats2] = EMAlgorithmwTime(SeqArray,neventtypes,pos,thresh)
r=size(SeqArray,1);
positions=unique(pos(:,size(pos,2)));

difposprop=0
m=0

while difposprop<thresh
    %% Calculate absolute occurence of each transition in each cluster
    probmat=zeros(neventtypes+1,neventtypes+1,2);
    for i = 1:length(unique(positions))
        kseqs=find(pos(:,size(pos,2))==positions(i));
        SeqArrayRev=SeqArray(kseqs);
        [probtransmat, ~] = ProbTransMat(SeqArrayRev,neventtypes);
        probmat(:,:,i)=probtransmat;
    end

    %% Find total transition times
    avetimemat=zeros(neventtypes+1,neventtypes+1,2);
    for i = 1:length(unique(positions))
        kseqs=find(pos(:,size(pos,2))==positions(i));
        SeqArrayRev=SeqArray(kseqs);
        avetimemat1 = ExpTimes(SeqArrayRev,neventtypes);
        avetimemat(:,:,i)=avetimemat1;
    end
    

    %% Calculate the probability of each cluster producing each sequence
    seqprobs=ones(r,length(unique(positions)));
    for i = 0:length(unique(positions))-1
        for j = 1:r
            seqlength=size(SeqArray{j},1);
            for l = 2:seqlength
                seqprobs(j,i+1)=seqprobs(j,i+1)*probmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2),i+1);
            end
            for l = 3:seqlength-1
                seqprobs(j,i+1)=seqprobs(j,i+1)*exppdf((SeqArray{j}(l,4)-SeqArray{j}(l-1,4))/365,avetimemat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2),i+1));
            end
        end
    end

    %% Assign sequences to the cluster that produces them with the greatest probability
    [D, I] = max(seqprobs,[],2);
    
    %% Add new positions and determine number that changed position
    pos=[pos, positions(I)];
    difposprop=(size(pos,1)-length(find(abs(pos(:,size(pos,2))-pos(:,size(pos,2)-1)))))/size(pos,1)

    %% Count iterations
    m=m+1
end
posfinal=[pos(:,1) pos(:,size(pos,2))];
Cmats=probmat;
Cmats2=avetimemat;
propfinal=[];
for i = 1:length(unique(positions))
    propfinal(i)=length(find(posfinal(:,2)==positions(i)))/length(posfinal(:,2));
end
end