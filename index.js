/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (a1, a2) => {
    let objArray = [];
    a2.forEach(item => {
        let obj = new Object();
        obj.name = item.name;
        obj.email = item.email;
        objArray.push(obj);
    });
    return objArray;
};
exports.excludeByProperty = (key, data) => {
    return data.filter(item => !item[key]);
};
exports.sumDeep = (data) => {
    data.forEach((item) => {
        let sum = 0;
        item.objects.forEach(item => {
            sum = sum + item.val;
        });
        item.objects = sum;
    })
    return data;
};
exports.applyStatusColor = (key, data) => {
    let mapColors = new Map(Object.entries(key));
    let statusToColor = [];

    mapColors.forEach((key, value) => {
        key.forEach(item => {
            let obj = new Object();
            obj.status = item;
            obj.color = value;
            statusToColor.push(obj);
        })
    });
    let selectColors = [];
    data.map(item => selectColors.push(statusToColor.find(o => o.status === item.status)));
    return selectColors.filter(el => el !== undefined);
};
/**
 * write a function to do something, do is incoming 
 */
exports.createGreeting = (greet, name) => {
    console.log(greet(name));
    return greet(name);
};
exports.setDefaults = () => { };
exports.fetchUserByNameAndUsersCompany = () => { };
