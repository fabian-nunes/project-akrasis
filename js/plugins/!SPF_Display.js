(function(){
    Window_MapName.prototype.initialize = function() {
        var wight = this.windowWidth();
        var height = this.windowHeight();

        /* Edit X variable to position Map name display */
        var x = 500;
        /* -------------------------------------------- */

        Window_Base.prototype.initialize.call(this, x, 0, wight, height);
        this.opacity = 0;
        this.contentsOpacity = 0;
        this._showCount = 0;
        this.refresh();
    };

    Window_MapName.prototype.refresh = function() {
        this.contents.clear();
        if ($gameMap.displayName()) {
            var width = this.contentsWidth();
            this.drawBackground(0, 0, width, this.lineHeight());
            this.changeTextColor("#fda700");
            this.drawText($gameMap.displayName(), 0, 0, width, 'center');
        }
    };

    Window_MapName.prototype.drawBackground = function(x, y, width, height) {
        let color1;
        let color2;
        if ($gameVariables.value(91) == 1) {
            color1 = "#3f5efb";
            color2 = "#fc466b";
        } else if ($gameVariables.value(91) == 2){
            color2 = "#3f5efb";
            color1 = "#fc466b";
        } else {
            color1 = "#3f5efb";
            color2 = "#fc466b";
        }

        this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
        this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
    };

})();