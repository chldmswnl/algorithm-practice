// level 2. 점프와 순간이동 

function solution(n)
{
    var ans = 0;
    
    while(n>0){
        if(n%2===0){
            n/=2;
        }else{
            n--;
            ans++;
        }
    }

    return ans;
}
