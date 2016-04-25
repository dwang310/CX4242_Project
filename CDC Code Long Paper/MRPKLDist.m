function seq2clustKLDist = MRPKLDist(SeqArray,neventtypes,probtransmat,avetimemat)

r=size(SeqArray,1);
seq2clustKLDist = zeros(r,1);
for j = 1:r
    [probtransmatj, ~] = ProbTransMat(SeqArray{j},neventtypes);
    avetimematj = ExpTimes(SeqArray{j},neventtypes);
    rowKLDist = zeros(size(probtransmatj,1),1);
    rowKLDist(1,:) = sum(probtransmatj(1,:).*log(probtransmatj(1,:)./(probtransmat(1,:)+eps)+eps));
    for k = 2:size(probtransmatj,1)
        rowKLDist(k) = sum((probtransmatj(k,:).*log(probtransmatj(k,:)./(probtransmat(k,:)+eps)+eps))...
            +[probtransmatj(k,1:neventtypes).*(log(1./(avetimematj(k,1:neventtypes)+eps))-log((avetimemat(k,1:neventtypes)+eps).^-1)...
            +(1./(avetimemat(k,1:neventtypes)+eps))./(1./(avetimematj(k,1:neventtypes)+eps))-1), 0]);
    end
    seq2clustKLDist(j) = mean(rowKLDist);
%     rowKLDist2 = zeros(size(probtransmatj,1),1);
%     for k = 2:size(probtransmatj,1)
%         rowKLDist2(k) = sum((probtransmat(k,:).*log(probtransmat(k,:)./(probtransmatj(k,:)+eps)+eps))+probtransmat(k,:).*(log(avetimemat(k,:)+eps)-log(avetimematj(k,:)+eps)+avetimemat(k,:)./(avetimematj(k,:)+eps)));
%     end
%     clust2seqKLDist(j) = mean(rowKLDist2);
end
% aveKLDist = zeros(r,1);
% aveKLDist = (seq2clustKLDist+clust2seqKLDist)/2;
seq2clustKLDist = [1:r; seq2clustKLDist']';
end