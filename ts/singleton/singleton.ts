class Singleton {
    private static instance: Singleton;
    
    private constructor() {}

    public static getInstance(){
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    console.log(s1 === s2);
}

clientCode();