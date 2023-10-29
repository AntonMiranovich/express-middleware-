function isValidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error("значение ID не может быть пустым");
  if (isNaN(id)) throw new Error("значение ID не может быть строкой");

  next();
}

function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error("значение name пустое");
  if (!isNaN(name)) throw new Error("значение name должно быть строкой");

  if (!surname) throw new Error("значение surname пустое");
  if (!isNaN(surname)) throw new Error("значение surname должно быть строкой");

  if (!email) throw new Error("значение email пустое");
  if (!/^[A-z0-9\.\-\_]+\@[a-z]+\.[A-z]+$/gm.test(email))
    throw new Error("поле Email заполнено некоректно");

  if (!pwd) throw new Error("значение pwd пустое");
  if (pwd.length < 8)
    throw new Error("значение pwd должно быть более 8 символов");

  next();
}


module.exports = { isValidUserId,isValidUserData };
