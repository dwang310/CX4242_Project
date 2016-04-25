%% SeqArray is the cell array of the log that you want to split.
%% neventtypes is the number of different types of events in the sequence

function[posfinal, propfinal, Cmats, Cmats2, bicsplit, bicnull] = KLLogSplitwTime(SeqArray,neventtypes,numsplits)

r=size(SeqArray,1);

%% Determine the BIC
[probtransmat, ~] = ProbTransMat(SeqArray,neventtypes);
avetimemat = ExpTimes(SeqArray,neventtypes);
logL=MRPLogLikelihood(SeqArray,probtransmat,avetimemat);
bicnull=logL-(neventtypes*(2*neventtypes+1)-1)*.5*log(r);

%% Determine the Kullback Leibler Distances under null model
seq2clustKLDist = MRPKLDist(SeqArray,neventtypes,probtransmat,avetimemat);
yr=sort(unique(seq2clustKLDist(:,2)));

%% Split SeqArray into numsplits different sections of equal size
bic1 = zeros(numsplits,1);
for i=1:numsplits
    leftseqs=find(seq2clustKLDist(:,2)<=yr(min(size(yr,1),i*ceil(size(yr,1)/numsplits))));
    LeftSeqArray=SeqArray(leftseqs);
    [leftprobtransmat, ~] = ProbTransMat(LeftSeqArray,neventtypes);
    leftavetimemat = ExpTimes(LeftSeqArray,neventtypes);
    leftlogL = MRPLogLikelihood(LeftSeqArray,leftprobtransmat,leftavetimemat);
    rightseqs=setdiff(1:r,leftseqs);
    RightSeqArray=SeqArray(rightseqs);
    [rightprobtransmat, ~] = ProbTransMat(RightSeqArray,neventtypes);
    rightavetimemat = ExpTimes(RightSeqArray,neventtypes);
    rightlogL = MRPLogLikelihood(RightSeqArray,rightprobtransmat,rightavetimemat);
    bic1(i) = leftlogL+rightlogL-(2*(neventtypes*(2*neventtypes+1)-1)*.5*log(r));
    i
end

%% Is the best split a better model than null?
[I, C] = max(bic1);
posfinal=zeros(r,1);
propfinal=zeros(2,1);
leftseqs=find(seq2clustKLDist(:,2)<=yr(min(size(yr,1),C*ceil(size(yr,1)/numsplits))));
rightseqs=setdiff(1:r,leftseqs);
posfinal(leftseqs)=1;
posfinal(rightseqs)=2;
[posfinalEM, propfinalEM, CmatsEM, Cmats2EM] = EMAlgorithmwTime(SeqArray,neventtypes,posfinal,.999);
positionsfin=unique(posfinalEM(:,size(posfinalEM,2)));
logLfin=0;
for i=1:length(unique(positionsfin))
    kseqs=find(posfinalEM(:,size(posfinalEM,2))==positionsfin(i));
    SeqArrayk=SeqArray(kseqs);
    [probtransmati, ~] = ProbTransMat(SeqArrayk,neventtypes);
    avetimemati = ExpTimes(SeqArrayk,neventtypes);
    logL1fin=MRPLogLikelihood(SeqArrayk,probtransmati,avetimemati);
    logLfin=logLfin+logL1fin;
end
bicfin=logLfin-(length(unique(positionsfin))*(neventtypes*(2*neventtypes+1)-1)*.5*log(r));
bicsplit=bicfin;

if (bicsplit > bicnull)==1
%     leftseqs=find(seq2clustKLDist(:,2)<=yr(min(size(yr,1),C*ceil(size(yr,1)/numsplits))));
%     LeftSeqArray=SeqArray(leftseqs);
%     [leftprobtransmat, ~] = ProbTransMat(LeftSeqArray,neventtypes);
%     leftavetimemat = ExpTimes(LeftSeqArray,neventtypes);
%     rightseqs=setdiff(1:r,leftseqs);
%     RightSeqArray=SeqArray(rightseqs);
%     [rightprobtransmat, ~] = ProbTransMat(RightSeqArray,neventtypes);
%     rightavetimemat = ExpTimes(RightSeqArray,neventtypes);
%     posfinal(leftseqs)=1;
%     posfinal(rightseqs)=2;
%     propfinal(1,1)=length(find(posfinal==1))/r;
%     propfinal(2,1)=length(find(posfinal==2))/r;
%     Cmats=leftprobtransmat;
%     Cmats(:,:,2)=rightprobtransmat;
%     Cmats2=leftavetimemat;
%     Cmats2(:,:,2)=rightavetimemat;
posfinal=posfinalEM;
propfinal=propfinalEM;
Cmats=CmatsEM;
Cmats2=Cmats2EM;
else
    posfinal=ones(r,1);
    propfinal(1,1)=1;
    propfinal(2,1)=0;
    Cmats=probtransmat;
    Cmats2=avetimemat;
end
posfinal=[1:r; posfinal']';
end