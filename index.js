var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var prop = key;
  object[prop] = value;
  return object;
}

