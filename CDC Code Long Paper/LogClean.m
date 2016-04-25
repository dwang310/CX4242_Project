%%%Removing Patients Events At Ages < 4
%%%num is the number of patients prior to this data cleaning

function [SeqArray, rrev2] = LogClean(SeqArray, num, neventtypes)

ages=zeros(num,1);
for i=1:num
    ages(i,1)=SeqArray{i}(1,3);
end
agesunder0=find(ages<0);
SeqArray(agesunder0,:) = [];
rrev=size(SeqArray,1);
for i=1:rrev
    SeqArray{i}(:,1) = i;
end


%% Adding in start and finish times
for i=1:rrev
    if SeqArray{i}(1,3) == 0
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 39814; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 40178];
    elseif SeqArray{i}(1,3) == 1
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 39448; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 40178];
    elseif SeqArray{i}(1,3) == 2
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 39083; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 40178];
    elseif SeqArray{i}(1,3) == 3
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38718; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 40178];
    elseif SeqArray{i}(1,3) == 14
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38353; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 39813];
    elseif SeqArray{i}(1,3) == 15
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38353; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 39447];
    elseif SeqArray{i}(1,3) == 16
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38353; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 39082];
    elseif SeqArray{i}(1,3) == 17
       SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38353; SeqArray{i}];
       SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 38717];
    else
        SeqArray{i} = [i, 0, SeqArray{i}(1,3), 38353; SeqArray{i}];
        SeqArray{i} = [SeqArray{i}; i, neventtypes+1, SeqArray{i}(1,3), 40178];
    end
end

%% Removing events prior to age 4
for i=1:rrev
    SeqArray{i}(find(SeqArray{i}(:,4)<SeqArray{i}(1,4)),:)=[];
end

seqlengths=zeros(rrev,1);
for i=1:rrev
    seqlengths(i,1)=size(SeqArray{i},1);
end
noeventsover4=find(seqlengths<3);
SeqArray(noeventsover4,:) = [];
rrev2=size(SeqArray,1);
for i=1:rrev2
    SeqArray{i}(:,1) = i;
end
end