VisitData=csvread('GA_2005_2009_wo_Other_Home_w_ages2.csv',1,3);
VisitData=VisitData(:,[1,3,2,4]);
neventtypes=max(VisitData(:,2));
[SeqArray1, r1]=LogSplit(VisitData);  %%Splitting up the visit data into individual patient sequences
[SeqArray, r]=LogClean(SeqArray1, r1, neventtypes);  %%Removing Patient Events under Age 4
% SeqArray=SeqArray(1:1000);
% r=1000;
eligyr1=zeros(r,1);
eligyr2=zeros(r,1);
for i=1:r
    eligyr1(i)=SeqArray{i}(1,4);
    eligyr2(i)=SeqArray{i}(size(SeqArray{i},1),4);
end
SeqArray=SeqArray(find(eligyr1 <=38718 & eligyr2 >=39813));
r=size(SeqArray, 1);


pos=ones(r,1);
pos=[1:r; pos']';

C = 1;
m=0 %Iteration Counter
positions1=1;
splitcands=1;
while C > 0
    logL=0;
    positions1=unique(pos(:,size(pos,2)));
    for i=1:length(unique(positions1))
        kseqs=find(pos(:,size(pos,2))==positions1(i));
        SeqArrayk=SeqArray(kseqs);
        [probtransmat, ~] = ProbTransMat(SeqArrayk,neventtypes);
        avetimemat = ExpTimes(SeqArrayk,neventtypes);
        logL1=MRPLogLikelihood(SeqArrayk,probtransmat,avetimemat);
        logL=logL+logL1;
    end
    bic(length(unique(positions1)))=logL-(length(unique(positions1))*(neventtypes*(2*neventtypes+1)-1)*.5*log(r));
    splittable=zeros(length(unique(splitcands)),3);
    clear poscand
    for i=1:length(unique(splitcands))
        kseqs=find(pos(:,size(pos,2))==splitcands(i));
        SeqArrayRev=SeqArray(kseqs);
        [posfinal, propfinal, Cmats, Cmats2, bicsplit, bicnull] = KLLogSplitwTime(SeqArrayRev,neventtypes,50);
        poscand{i}(kseqs,:)=[pos(kseqs,:), pos(kseqs,size(pos,2))+(.1)*posfinal(:,size(posfinal,2))];
        poscand{i}(setdiff(1:r,kseqs)',:)=[pos(setdiff(1:r,kseqs)',:), pos(setdiff(1:r,kseqs)',size(pos,2))];
        positions2=unique(poscand{i}(:,size(poscand{i},2)));
        logL=0;
        for j=1:length(unique(positions2))
            kseqs=find(poscand{i}(:,size(poscand{i},2))==positions2(j));
            SeqArrayk=SeqArray(kseqs);
            [probtransmat, ~] = ProbTransMat(SeqArrayk,neventtypes);
            avetimemat = ExpTimes(SeqArrayk,neventtypes);
            logL1=MRPLogLikelihood(SeqArrayk,probtransmat,avetimemat);
            logL=logL+logL1;
        end
        bicsplit2=logL-(length(unique(positions2))*(neventtypes*(2*neventtypes+1)-1)*.5*log(r));
        splittable(i,1)=splitcands(i);
        splittable(i,2)=bicsplit2-bic(length(unique(positions1)));
        splittable(i,3)=bicsplit2;
        if splittable(i,2) > 0
            pos=poscand{i};
        end
    end
    [C, I]=max(splittable(:,2));
    positions3=unique(pos(:,size(pos,2)));
    for i = 1:length(unique(positions2))
        pos(find(pos(:,size(pos,2))==positions3(i)),size(pos,2))=i;
    end
    splitcands=find(mod(positions3*10,10));
    m=m+1
    csvwrite(['Simulations081314\BICSplit',num2str(m),'.csv'],splittable);
    csvwrite(['Simulations081314\GA_Positions',num2str(m),'.csv'],pos);
end
[posfinalEM, propfinalEM, CmatsEM, Cmats2EM] = EMAlgorithmwTime(SeqArray,neventtypes,pos,1);
csvwrite('GA_Clustering_Positions.csv',pos);
csvwrite('GA_Clustering_PositionsEM.csv',posfinalEM);
