export const handler = async(event) => {
    const resp = getDashboadInfo();
    
    return resp;
};


const getDashboadInfo = () => "Here's my dashboard info";