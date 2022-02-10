/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiPetstore);
  }
}(this, function(expect, OpenApiPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiPetstore.HasOnlyReadOnly();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HasOnlyReadOnly', function() {
    it('should create an instance of HasOnlyReadOnly', function() {
      // uncomment below and update the code to test HasOnlyReadOnly
      //var instane = new OpenApiPetstore.HasOnlyReadOnly();
      //expect(instance).to.be.a(OpenApiPetstore.HasOnlyReadOnly);
    });

    it('should have the property bar (base name: "bar")', function() {
      // uncomment below and update the code to test the property bar
      //var instane = new OpenApiPetstore.HasOnlyReadOnly();
      //expect(instance).to.be();
    });

    it('should have the property foo (base name: "foo")', function() {
      // uncomment below and update the code to test the property foo
      //var instane = new OpenApiPetstore.HasOnlyReadOnly();
      //expect(instance).to.be();
    });

  });

}));