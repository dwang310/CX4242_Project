function logL = MRPLogLikelihood(SeqArray, probtransmat, avetimemat)

r = size(SeqArray,1);
logL=0;
for j = 1:r
    seqlength=size(SeqArray{j},1);
    seqprob=1;
    for l = 2:seqlength
        seqprob=seqprob*probtransmat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2));
    end
    for l = 3:seqlength-1
        seqprob=seqprob*exppdf((SeqArray{j}(l,4)-SeqArray{j}(l-1,4))/365,avetimemat(SeqArray{j}(l-1,2)+1,SeqArray{j}(l,2)));
    end
    logL=logL+log(seqprob);
end

end