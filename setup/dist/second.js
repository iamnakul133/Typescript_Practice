"use strict";
//interface does not have the implementation it just says we should have some things as they are
class Instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    createStory() {
        return "create story";
    }
}
class Youtube {
    constructor(cameraMode, filter, brust, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.short = short;
    }
}
