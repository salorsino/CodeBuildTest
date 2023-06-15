export const handler = async(event) => {
    console.log('THIS BETTER WORK');
    console.log('for sure worked')
    const resp = getDashboadInfo();
    return resp;
};


const getDashboadInfo = () => "Here's my dashboard info";