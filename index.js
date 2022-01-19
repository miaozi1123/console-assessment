/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => "hello world";

exports.stripPrivateProperties = (a1, a2) => {
  let objArray = [];
  a2.forEach((item) => {
    let obj = new Object();
    obj.name = item.name;
    obj.email = item.email;
    objArray.push(obj);
  });
  return objArray;
};
exports.excludeByProperty = (key, data) => {
  return data.filter((item) => !item[key]);
};
exports.sumDeep = (data) => {
  data.forEach((item) => {
    let sum = 0;
    item.objects.forEach((item) => {
      sum = sum + item.val;
    });
    item.objects = sum;
  });
  return data;
};
exports.applyStatusColor = (key, data) => {
  let mapColors = new Map(Object.entries(key));
  let statusToColor = [];

  mapColors.forEach((key, value) => {
    key.forEach((item) => {
      let obj = new Object();
      obj.status = item;
      obj.color = value;
      statusToColor.push(obj);
    });
  });
  let selectColors = [];
  data.map((item) =>
    selectColors.push(statusToColor.find((o) => o.status === item.status))
  );
  return selectColors.filter((el) => el !== undefined);
};
/**
 * write a function to do something, do is incoming
 * need function greet parameter,how to get function greet parameter name?
 * mybe return private function
 */
exports.createGreeting = (greet, greeting) => {
  // let tmp = (name)=>{
  //     greet(greeting, name);
  //     return tmp;
  // }
  // console.log(tmp, "tmp");
  // return tmp;
  return (name) => {
    greet(greeting, name);
  };
};
exports.setDefaults = () => {};
/**
 * obj return {}?? but componyGet can get corrrect obj
 * setTimeout?
 * wait 220ms but how to return?
 * use Promise.all?
 * return promise!
 * @param {*} name 
 * @param {*} services 
 * @returns 
 */
exports.fetchUserByNameAndUsersCompany = (name, services) => {
  let obj = new Object();
  let companyId = 0;
  const usersGet = services.fetchUsers();
  let thenProm = usersGet.then((value) => {
    value.map((item) => {
      if (item.name === name) {
        obj.user = item;
        companyId = item.companyId;
      }
    });
  });
  let componyGet = thenProm.then(() => {
    let company = services.fetchCompanyById(companyId);
    company.then((value) => {
      obj.company = value;
    });
    return obj;
  });
  const statusGet = services.fetchStatus();
  statusGet.then((value) => {
    obj.status = value;
  });
  
  return new Promise((resolve, reject) => {
    resolve(componyGet);
  });
};
