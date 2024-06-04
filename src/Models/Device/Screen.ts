//@ts-ignore
import { injectable } from "inversify";
import { Platform } from "quasar";
import { Ref, ref } from "vue";


@injectable()
export class Screen{

    quasarPlatformDetect = Platform
    
    screenWidth: Ref<number|string> = ref(0);
    screenHeight: Ref<number|string> = ref(0);

    subscribers: Array<(screenWidth: number, screenHeight: number) => void> = []

    constructor(

    ){


        this.screenWidth.value = document.documentElement.clientWidth
        this.screenHeight.value = document.documentElement.clientHeight

        if(!this.screenWidth || !this.screenHeight){
            this.SetScreenSize()
        }

        window.addEventListener('resize', () => {
            this.SetScreenSize()
        })
    }
    public ChangeScreenSize(screenWidth: number | string, screenHeight: number | string){
        //we need numeric values
        
        if(typeof screenWidth == 'string'){

            if(screenWidth.includes('"')){
                screenWidth = screenWidth.replace('"', '')    
            }
            screenWidth = parseInt(screenWidth.replace('px', ''))
        }
        if(typeof screenHeight == 'string'){
            
            if(screenHeight.includes('"')){
                screenHeight = screenHeight.replace('"', '')    
            }
            screenHeight = parseInt(screenHeight.replace('px', ''))
        }

        this.screenWidth.value = screenWidth
        this.screenHeight.value = screenHeight
        this.NotifyScreenChanged()
    }
    public GetScreenSize(){
        return {
            screenWidth: this.screenWidth,
            screenHeight: this.screenHeight
        }
    }
   
    public Subscribe(callback: (screenWidth: number, screenHeight: number) => void){
        this.subscribers.push(callback)
    }

    private NotifyScreenChanged(){
        for(const subscriber of this.subscribers){
            subscriber(this.screenWidth.value, this.screenHeight.value)
        }
    }

    private SetScreenSize(){
        this.screenWidth.value = window.innerWidth
        this.screenHeight.value = window.innerHeight
        this.NotifyScreenChanged()
    }

}