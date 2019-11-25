export class Calculations {
    public static getLevelFromTestCount(count) {
        let baseLevelMultiplier: number = 3;
        let currentLevel: number = 1;
        let currentNextLevel: number = 3;
        let previousLevelMarker: number = 0;
        
        function getLevel(count) {
            if (count < currentNextLevel) {
                return currentLevel;
            } else {
                currentLevel++;
                previousLevelMarker = currentNextLevel;
                currentNextLevel = currentNextLevel + baseLevelMultiplier + 1;
                baseLevelMultiplier++;
                getLevel(count);
            }
        }
        getLevel(count);
        // if (count < 3) {
        //     return 1;
        // }
        // if (count < base + base + 1) {
        //     return 2;
        // }
        // if (count < base + base + base + 1) {
        //     return 3;
        // }
        // 3, 7, 12, 18, 25, 33 ... +3, +4, +5, +6, +7



        // for example, pass in 2 (two tests), then...
        // return { 
        //     currentLevel: 1,
        //     nextLevelMarker: 3
        // }
        // pass in 8 (eight tests), then...
        return {
            currentScore: count,
            currentLevel,
            currentNextLevel,
            previousLevelMarker
        }
    }
}