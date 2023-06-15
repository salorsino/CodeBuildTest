export const handler = async(event) => {
    console.log('THIS BETTER WORK');
    const resp = getDashboadInfo();
    return resp;
};


const getDashboadInfo = () => "Here's my dashboard info";