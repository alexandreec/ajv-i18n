'use strict';
var localize_id = function localize_id(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'tidak bisa menyelesaikan referensi ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh memiliki lebih dari ' + (n) + ' item';
        break;
      case 'additionalProperties':
        out = 'tidak boleh memiliki properti tambahan';
        break;
      case 'anyOf':
        out = 'harus cocok dengan beberapa skema pada "anyOf"';
        break;
      case 'const':
        out = 'harus sama dengan konstan';
        break;
      case 'contains':
        out = 'harus berisi item yang valid';
        break;
      case 'custom':
        out = 'harus lulus validasi kata kunci "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += ' harus memiliki properti ' + (e.params.deps) + ' ketika properti ' + (e.params.property) + ' hadir';
        break;
      case 'enum':
        out = 'harus sama dengan salah satu dari nilai yang telah ditentukan';
        break;
      case 'exclusiveMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'exclusiveMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'false schema':
        out = 'skema boolean salah';
        break;
      case 'format':
        out = 'harus cocok dengan format "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum harus boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum harus boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'if':
        out = 'harus cocok dengan skema "' + (e.params.failingKeyword) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh memiliki lebih dari ' + (n) + ' item';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh lebih dari ' + (n) + ' karakter';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh memiliki lebih dari ' + (n) + ' properti';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'harus ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh kurang dari ' + (n) + ' item';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh lebih pendek dari ' + (n) + ' karakter';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += ' tidak boleh kurang dari ' + (n) + ' properti';
        break;
      case 'multipleOf':
        out = 'harus merupakan kelipatan dari ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'tidak boleh valid sesuai dengan skema pada "not"';
        break;
      case 'oneOf':
        out = 'harus sama persis dengan satu skema pada "oneOf"';
        break;
      case 'pattern':
        out = 'harus cocok dengan pola "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'harus memiliki pola pencocokan properti "' + (e.params.missingPattern) + '"';
        break;
      case 'propertyNames':
        out = 'nama properti \'' + (e.params.propertyName) + '\' tidak valid';
        break;
      case 'required':
        out = 'harus memiliki properti ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'harus lulus validasi kata kunci "switch", gagal pada ' + (e.params.caseIndex);
        break;
      case 'type':
        out = 'harus berupa ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'tidak boleh memiliki item duplikat (item ## ' + (e.params.j) + ' dan ' + (e.params.i) + ' identik)';
        break;
      case 'errorMessage':
        localize_id(e.params.errors);
        continue;
      default:
        out = 'harus lulus validasi kata kunci "' + (e.keyword) + '"';
    }
    e.message = out;
  }
};
module.exports = localize_id;
