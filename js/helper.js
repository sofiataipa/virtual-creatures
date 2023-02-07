function preload()
{
    backgroundImg   = loadImage("pngs/background.png");
    tv_1            = loadImage("pngs/tv-1.png");
    tv_2            = loadImage("pngs/tv-2.png");
    remote          = loadImage("pngs/remote.png");
    remote_disabled = loadImage("pngs/remote-disabled.png");
    z_1             = loadImage("pngs/z.png");
    z_2             = loadImage("pngs/zz.png");
    z_3             = loadImage("pngs/zzz.png");
    bodyImg         = loadImage("pngs/body.png");
    normal_1        = loadImage("pngs/normal-1.png");
    normal_2        = loadImage("pngs/normal-2.png");
    normal_3        = loadImage("pngs/normal-3.png");
    normal_4        = loadImage("pngs/normal-2.png");
    sleeping_1      = loadImage("pngs/sleeping-1.png");
    sleeping_2      = loadImage("pngs/sleeping-2.png");
    angry           = loadImage("pngs/angry.png");
    shush           = loadImage("pngs/shush.png");
    move            = loadImage("pngs/move.png");
    forget          = loadImage("pngs/forget.png");
}

function createArrays()
{
    imgs = [backgroundImg, bodyImg];
    remote = [remote, remote_disabled]
    awake = [normal_1, normal_2, normal_3, normal_4];
    sleeping = [sleeping_1, sleeping_2];
    sleeping_zzz = [z_1, z_2, z_3];
    text = [shush, move, forget];
    tv = [tv_1, tv_2];
}

function resizeImgs()
{
    for(img of imgs)
        img.resize(width, 0)
    for(img of remote)
        img.resize(width, 0)
    for(img of awake)
        img.resize(width, 0)
    for(img of sleeping)
        img.resize(width, 0)
    for(img of sleeping_zzz)
        img.resize(width, 0)
    for(img of tv)
        img.resize(width, 0)
    for(img of text)
        img.resize(width, 0)
    angry.resize(width, 0);
}

function updateCanvas() 
{
 // if(windowHeight < windowWidth)
  let cnv = createCanvas(windowWidth*SIZE, windowWidth*SIZE*0.56);
  //else
  //  cnv = createCanvas(windowWidth*SIZE, windowWidth*SIZE);
  
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;

  cnv.position(x, y);

  
}

function windowResized() { 
    resizeImgs();
    location.reload();
    updateCanvas(); 
}