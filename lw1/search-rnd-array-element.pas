program SearchRndElementInRndArray;
uses crt;
const N = 10;
var
  a: array [1..N] of integer;
  k: integer;
  isFound: boolean;
  i: integer;
begin
  randomize;
  for i := 1 to N do 
    a[i] := Random(15); 
  writeln('Filled random array: ');
  for i := 1 to N do
    write(a[i], ' ');  
  writeln;   
  k := Random(15); 
  isFound := False;
  for i:=1 to N do
    if a[i] = k then 
    begin
      isFound := True;
      break;
    end; 
  if IsFound then
    writeln('Element ', k, ' is found!')
  else
    writeln('Element ', k, ' not found');
end.
