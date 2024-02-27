function solution(num_list) {

    const lastNum=num_list[num_list.length-1];
    const beforeLastNum=num_list[num_list.length-2];
    
    if(lastNum>beforeLastNum){
        num_list=[...num_list,lastNum-beforeLastNum];
    }else if(lastNum<=beforeLastNum){
        num_list=[...num_list,lastNum*2];
    }
    
    return num_list;
}