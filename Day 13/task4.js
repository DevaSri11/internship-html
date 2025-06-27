function mov1(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}
function mov2(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function tl(){
   mov1();
   turnLeft();
   move();
   turnLeft();
}
function tr(){
   mov2();
   turnRight();
   move();
   turnRight();
}
function main(){
   tl();
   tr();
   tl();
   tr();
   mov1();
}