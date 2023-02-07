function setup()
{
    frameRate(60)
    //createCanvas(800, 450); 
    updateCanvas();

    // remote position
    x = width*0.525;
    y = height*0.72;
    remotePos = createVector(x, y);

    createArrays();
    resizeImgs();
}

function draw()
{ 
    cursor(ARROW);
    checksIfFallsAsleep();

    // draw base images
    for(img of imgs)
        image(img, 0, 0);
    // draw tv
    animateTv();
    // draw rest of the images
    stateMachine();
}

/**
 * animates the tv
 */
function animateTv()
{
    if(frameCount % 7 == 0) {
        if(idxTv+1 > tv.length-1)
            idxTv=0;
        else    
            idxTv++;
    }
    image(tv[idxTv], 0, 0);
}

/**
 * if the mouse is clicked over the remote, loaf becomes angry
 */
function mouseClicked()
{
    if(state == STATES.SLEEPING && mouseOnRemote()) {
        tAngry = millis();
        state = STATES.ANGRY;
    }   
}

/**
 * checks if the mouse is over the remote
 */
function mouseOnRemote()
{
    let mousePos = createVector(mouseX,mouseY);
    if(remotePos.dist(mousePos) < distRemote)
        return true;
    return false;
}

/**
 * check if the the mouse has not been moved for long enough
 * for the loaf to fall asleep
 */
function checksIfFallsAsleep()
{
    if(millis() - tLastMovement > time_to_fall_asleep && state == STATES.AWAKE)
        state = STATES.SLEEPING; 
}

/**
 * checks if the time while angry has already passed
 */
function angryTimeHasPassed()
{
    return millis()-tAngry > time_while_angry;
}

/**
 * if moused was moved, updates the time stamp
 * if angry time has passed, returns to awake state
 */
function mouseMoved() 
{
    tLastMovement = millis();
    if(!angryTimeHasPassed())
        return;
    state = STATES.AWAKE;
}

/**
 * states: awake, sleeping, angry
 */
function stateMachine()
{
    switch(state)
    {
        case STATES.AWAKE:
            // draws text and remote
            image(text[0], 0, 0);
            image(remote[1], 0, 0);
            
            // blinking animation
            if(blinking) {
                if(frameCount % 8 == 0) {
                    if(idxAwake+1 > awake.length-1)
                    {
                        idxAwake=0;
                        blinking = false
                    }  
                    else    
                        idxAwake++;
                }
                image(awake[idxAwake], 0, 0);     
            }
            // check next time it blinks
            else
            {
                if(frameCount % 100 == 0)
                    blinking = true;
              
                image(normal_1, 0, 0);
            }
                
            break;

        case STATES.SLEEPING:
            // draws text and remote
            image(text[1], 0, 0);
            image(remote[0], 0, 0);

            // sleeping animation
            if(frameCount % 60 == 0) {
                if(idxSleeping+1 > sleeping.length-1)
                    idxSleeping=0;
                else    
                    idxSleeping++;
            }
            image(sleeping[idxSleeping], 0, 0);   
            
            // "ZZZ" animation
            if(frameCount % 50 == 0) {
                if(idxZzz+1 > sleeping_zzz.length-1)
                    idxZzz=0;
                else    
                    idxZzz++;
            }
            image(sleeping_zzz[idxZzz], 0, 0);   
            
            // change mouse icon
            if(mouseOnRemote)
                cursor('grab');
            else
                cursor(ARROW);

            break;

        case STATES.ANGRY:
            // draws text and remote
            image(text[2], 0, 0);
            image(remote[1], 0, 0);
            // draw angry face
            image(angry, 0, 0);

            if(angryTimeHasPassed()) 
            {
                state = STATES.AWAKE;
                tLastMovement = millis();
            }
            break;
    }
}