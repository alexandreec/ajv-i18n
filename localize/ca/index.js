'use strict';
var localize_ca = function localize_ca(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'no es pot resoldre la referència «' + (e.params.ref) + '»';
        break;
      case 'additionalItems':
        out = '«';
        var n = e.params.limit;
        out += '» no ha de tenir més de ' + (n) + ' element';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'no ha de tenir propietats addicionals';
        break;
      case 'anyOf':
        out = 'ha de coincidir amb algun esquema definit a «anyOf»';
        break;
      case 'const':
        out = 'ha de ser igual a la constant';
        break;
      case 'contains':
        out = 'ha de contenir un ítem vàlid';
        break;
      case 'custom':
        out = 'ha de passar la validació de la clau «' + (e.keyword) + '»';
        break;
      case 'dependencies':
        out = '«';
        var n = e.params.depsCount;
        out += '» ha de contenir la propietat';
        if (n != 1) {
          out += 's';
        }
        out += ' «' + (e.params.deps) + '» quan la propietat «' + (e.params.property) + '» és present';
        break;
      case 'enum':
        out = 'ha de ser igual a un dels valors predefinits';
        break;
      case 'exclusiveMaximum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'exclusiveMinimum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'false schema':
        out = 'l’esquema és fals';
        break;
      case 'format':
        out = 'ha de coincidir amb el format «' + (e.params.format) + '»';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum ha de ser booleà';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum ha de ser booleà';
        break;
      case 'formatMaximum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'formatMinimum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'if':
        out = 'ha de correspondre’s amb l’esquema «' + (e.params.failingKeyword) + '»';
        break;
      case 'maximum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'maxItems':
        out = '«';
        var n = e.params.limit;
        out += '» no ha de tenir més de ' + (n) + ' ítem';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '«';
        var n = e.params.limit;
        out += '» no pot contenir més de ' + (n) + ' caràcter';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxProperties':
        out = '«';
        var n = e.params.limit;
        out += '» no pot contenir més de ' + (n) + ' propietat';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minimum':
        out = '«';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '» ha de ser «' + (cond) + '»';
        break;
      case 'minItems':
        out = '«';
        var n = e.params.limit;
        out += '» no ha de tenir menys de ' + (n) + ' ítem';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '«';
        var n = e.params.limit;
        out += '» no pot contenir menys de ' + (n) + ' caràcter';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minProperties':
        out = '«';
        var n = e.params.limit;
        out += '» no pot contenir menys de ' + (n) + ' propietat';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'multipleOf':
        out = 'ha de ser múltiple de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'no ha de ser vàlid d’acord amb l’esquema definit a «not»';
        break;
      case 'oneOf':
        out = 'ha de coincidir només amb un esquema definit a «oneOf»';
        break;
      case 'pattern':
        out = 'ha de coincidir amb el patró «' + (e.params.pattern) + '»';
        break;
      case 'patternRequired':
        out = 'la propietat ha de coincidir amb el patró «' + (e.params.missingPattern) + '»';
        break;
      case 'propertyNames':
        out = 'la propietat «' + (e.params.propertyName) + '» no és vàlida';
        break;
      case 'required':
        out = 'ha de tenir la propietat requerida «' + (e.params.missingProperty) + '»';
        break;
      case 'switch':
        out = 'ha de passar la validació «switch», el cas «' + (e.params.caseIndex) + '» falla';
        break;
      case 'type':
        out = 'ha de ser del tipus «' + (e.params.type) + '»';
        break;
      case 'uniqueItems':
        out = 'no ha de tenir ítems duplicats (els ítems ## «' + (e.params.j) + '» i «' + (e.params.i) + '» són idèntics)';
        break;
      case 'errorMessage':
        localize_ca(e.params.errors);
        continue;
      default:
        out = 'ha de passar la validació de la clau «' + (e.keyword) + '»';
    }
    e.message = out;
  }
};
module.exports = localize_ca;
