class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const smap = new Map();
        const tmap = new Map();
        for(let i=0; i<s.length; i++){
            if(smap.has(s[i])){
                smap.set(s[i], smap.get(s[i]) + 1)
            }else{
                smap.set(s[i], 1);
            }

        }

        for(let j=0; j<t.length; j++){
            if(tmap.has(t[j])){
                tmap.set(t[j], tmap.get(t[j]) + 1)
            }else{
                tmap.set(t[j], 1);
            }

        }

        for (const [key, value] of smap) {
            if (!tmap.has(key) || tmap.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
