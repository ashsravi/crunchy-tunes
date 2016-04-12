// test for YouTube API
import React from 'react';
import TestUtils from 'react-addons-test-utils'; //Alternately could use the DOM API
import searchYouTube from '../requestYouTubeUtils.jsx';


describe('YouTube search API request', function () {
    var returned;
    var query = {query: 'kanye west'};
    // due to async get request, need to pass in special Jasmine callback done
    beforeEach(function(done) {
    	searchYouTube(query, function(result) {
    		// set return to the array of song results
    		returned = result;
    		// special callback invocation
    		done();
    	});
    });

  it('should return array of objects given a string query input', function () {
    expect(returned[0]).toEqual(jasmine.any(Object));
  });
});
	