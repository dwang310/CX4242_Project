%% This line of code reads into your array, the data from the excel sheet.
VisitData=csvread('Filename.csv',1,3);  %%This contains your original visit data.
VisitData=VisitData(:,[2,3,1,4]);  %%This reorders the columns into the correct order necessary for code to work.
neventtypes=max(VisitData(:,2));  %%The number of event types, in our case: 6.
[SeqArray1, r1]=LogSplit(VisitData);  %%Splitting up the visit data into individual patient sequences
[SeqArray, r]=LogClean(SeqArray1, r1, neventtypes);  %%Removing Patient Events under Age 4

%% This section removes patients based on age/eligibility.
%% We want people that belong to the age group for at least 4 years of continuous eligibility.
eligyr1=zeros(r,1);
eligyr2=zeros(r,1);
for i=1:r
    eligyr1(i)=SeqArray{i}(1,4);
    eligyr2(i)=SeqArray{i}(size(SeqArray{i},1),4);
end
SeqArray=SeqArray(find(eligyr1 <=38718 & eligyr2 >=39813));
r=size(SeqArray, 1);

%%Change the "X" in the line below to equal the number of
%%iterations
for i=1:X
    pos=csvread(['FOLDER_NAME\GA_POSITIONS',num2str(i),'.csv']); %%Change FOLDER_NAME to the name of the folder with the results
    positions1=unique(pos(:,size(pos,2)));
    Probmat=zeros(neventtypes+1,neventtypes+1,length(unique(positions1)));
    Transmat=zeros(neventtypes+1,neventtypes+1,length(unique(positions1)));
    Timemat=zeros(neventtypes+1,neventtypes+1,length(unique(positions1)));
    Prop=zeros(1,length(unique(positions1)));
    for j=1:length(unique(positions1))
        kseqs=find(pos(:,size(pos,2))==positions1(j));
        SeqArrayk=SeqArray(kseqs);
        [probtransmat, transmat] = ProbTransMat(SeqArrayk,neventtypes);
        avetimemat = ExpTimes(SeqArrayk,neventtypes);
        Prop(j)=length(kseqs)/r;
        Probmat(:,:,j)=probtransmat;
        Transmat(:,:,j)=transmat;
        Timemat(:,:,j)=timemat;
    end
    csvwrite(['FOLDER_NAME\Prop',num2str(i),'v2.csv'],Prop); %%Change FOLDER_NAME to the name of the folder with the results
    csvwrite(['FOLDER_NAME\Probmat',num2str(i),'v2.csv'],Probmat); %%Change FOLDER_NAME to the name of the folder with the results
    csvwrite(['FOLDER_NAME\Transmat',num2str(i),'v2.csv'],Transmat); %%Change FOLDER_NAME to the name of the folder with the results
    csvwrite(['FOLDER_NAME\Timemat',num2str(i),'v2.csv'],Timemat); %%Change FOLDER_NAME to the name of the folder with the results
end
