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
        
        return {
            currentScore: count,
            currentLevel,
            currentNextLevel,
            previousLevelMarker
        }
    }
}