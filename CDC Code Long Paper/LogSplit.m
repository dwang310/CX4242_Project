function [SeqArray, r] = LogSplit(Log)
counts=hist(Log(:,1),unique(Log(:,1)));
SeqArray=mat2cell(Log,counts,size(Log,2));
r = size(SeqArray,1);
end