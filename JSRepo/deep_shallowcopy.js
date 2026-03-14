const user1={
    username:'Sara',
    age:12,
    marks:{
        maths:20,
        eng:25
    },
};
const user2=JSON.parse(JSON.stringify(user1));
user2.username='Harry';
user2.marks.maths=10;
console.log(user2);
console.log(user1);

