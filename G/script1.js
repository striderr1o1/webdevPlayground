//اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ
//ES6 modules export/import

//method 1
export const greeting2 = ()=>{
    return "As-salam o alaikum!";
}

//method 2

const saySomething = ()=>{
    return "Free Palestine";
}

export {saySomething, /*greeting*/};

export const name1 = 1, name2 = 2

//#################DEFAULT-EXPORT#######################
// export default "How are you doing?";
//OR (only one is acceptable)
const greeting = "How are you doing?";
export default greeting;

