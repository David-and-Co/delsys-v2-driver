window.onload = async () => {
    SetWakeLock();


}

const SetWakeLock = async () => {
    var noSleep = new NoSleep();
    document.addEventListener('click', async function enableNoSleep() {
        document.removeEventListener('click', enableNoSleep, false);
        try{
            noSleep.enable();
        }
        catch(e){
            document.getElementById("container").innerHTML += e;

        }
 

      }, false);
}
