import minimongo from "minimongo";

/**
 * This is a stand-alone class that handles data storage and retreival from minimongo database.
 */

const HistoryManager = () => {
  var obj = {};
  var IndexedDb = minimongo.IndexedDb;

  obj.connect = () => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb({ namespace: "MyTranslations" }, function () {
        db.addCollection("translations");
        resolve(db);
      });
    });
  };

  obj.addTranslation = (phrase, translation, language) => {
    return new Promise(async (resolve, reject) => {
      const data = {
        _phrase: phrase,
        _translation: translation,
        _language: language,
      };

      const db = await obj.connect();
      db.translations.upsert(data, function (res, err) {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  };

  obj.getHistory = () => {
    return new Promise(async (resolve, reject) => {
      const db = await obj.connect();
      db.translations.find().fetch((res, err) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  };

  return obj;
};

export default HistoryManager;
