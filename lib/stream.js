define(function () {

    'use strict';

    // helper function
    var log = function (msg) {
        console.log(msg);
    };

    // helper function - downloads binary only
    function downloadArrayBuffer(url, context, callback) {
        var xhr = new XMLHttpRequest();
        log('XHR request' + url);

        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var binary = new Uint8Array(xhr.response);
                    callback(binary, context);
                }
            }
        };
        xhr.send();

        return xhr;
    }

    // Check for MediaSource support
    if (window.MediaSource) {
        log("MediaSource supported");
    } else {
        alert('No media source support');
    }

    var baseUrl = "/";

    // Normally would parse these values out of the Manifest.mpd - omitted for clarity.
    var initUrl = baseUrl + "chunk_ctvideo_rid0_cfm4s_cinit_w1337664012_mpd.m4s";
    var segmentList = [
        "chunk_ctvideo_rid0_cfm4s_cn1_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn2_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn3_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn4_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn5_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn6_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn7_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn8_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn9_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn10_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn11_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn12_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn13_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn14_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn15_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn16_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn17_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn18_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn19_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn20_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn21_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn22_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn23_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn24_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn25_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn26_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn27_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn28_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn29_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn30_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn31_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn32_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn33_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn34_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn35_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn36_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn37_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn38_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn39_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn40_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn41_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn42_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn43_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn44_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn45_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn46_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn47_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn48_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn49_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn50_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn51_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn52_w1337664012_mpd.m4s",
        "chunk_ctvideo_rid0_cfm4s_cn53_w1337664012_mpd.m4s"];

    var video = document.getElementById('myVideo');
    //var mse = new (window.MediaSource || window.WebKitMediaSource)();
    var mse = new window.MediaSource();
    var sb;
    var segmentCounter = 0;

    video.addEventListener('loadedmetadata', function (e) {
        log('loadedmetadata');
    });

    //mse.addEventListener('webkitsourceopen', onSourceOpen.bind(null, video, mse));
    mse.addEventListener('sourceopen', onSourceOpen.bind(null, video, mse));

    video.src = URL.createObjectURL(mse);

    function onSourceOpen(video, mse, evt) {
        log("onSourceOpen()");

        // Sets up the source buffer - you parse these value out of the manifest too
        sb = mse.addSourceBuffer('video/mp4; codecs="avc1.4d401e"');
        log('source buffer added');
        loadMovie();
    }

    // no frills - fill the source buffer with an init segment followed by data segments
    var loadMovie = function () {

        downloadArrayBuffer(initUrl, 0, function (data, context) {
            log('init segment downloaded');
            if (data) {
                if (sb.updating === false) {
                    sb.appendBuffer(data);
                    log('Source buffer initialized');

                    // start the datasegments...
                    downloadSegment(0);
                }
            }
        });
    };

    // gotta do it event-based so we don't upset the sourceBuffer
    var downloadSegment = function (idx) {

        downloadArrayBuffer(baseUrl + segmentList[idx], idx, function (data, context) {
            log('Data segment ' + context + ' downloaded ');

            if (data) {
                if (sb.updating === false) {
                    sb.appendBuffer(data);
                    sb.addEventListener("update", bufferUpdate, false);
                }
            }
        });
    };

    // there's got to be a better way than adding/removing event handlers but I gotta put kids to bed...
    var bufferUpdate = function () {
        if (segmentCounter < segmentList.length - 1) {
            segmentCounter++;
            downloadSegment(segmentCounter);
        }
        sb.removeEventListener("update", bufferUpdate);
    };

});