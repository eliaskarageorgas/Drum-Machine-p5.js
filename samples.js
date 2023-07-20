function loadSampleCollections(){

    hihat808 = loadSound('assets/hihats/hihat-808.wav', () => {});
    hihatacoustic1 = loadSound('assets/hihats/hihat-acoustic01.wav', () => {});
    hihatacoustic2 = loadSound('assets/hihats/hihat-acoustic02.wav', () => {});
    hihatanalog = loadSound('assets/hihats/hihat-analog.wav', () => {});
    hihatdigital = loadSound('assets/hihats/hihat-digital.wav', () => {});
    hihatdist1 = loadSound('assets/hihats/hihat-dist01.wav', () => {});
    hihatdist2 =  loadSound('assets/hihats/hihat-dist02.wav', () => {});
    hihatelectro = loadSound('assets/hihats/hihat-electro.wav', () => {}); 
    hihatplain = loadSound('assets/hihats/hihat-plain.wav', () => {});
    hihatreso = loadSound('assets/hihats/hihat-reso.wav', () => {});
    hihatring = loadSound('assets/hihats/hihat-ring.wav', () => {});
    hihatSampleCollection.set("hihat-808", hihat808)
    hihatSampleCollection.set("hihat-acoustic01", hihatacoustic1)
    hihatSampleCollection.set("hihat-acoustic02", hihatacoustic2)
    hihatSampleCollection.set("hihat-analog", hihatanalog)
    hihatSampleCollection.set("hihat-digital", hihatdigital)
    hihatSampleCollection.set("hihat-dist01", hihatdist1)
    hihatSampleCollection.set("hihat-dist02", hihatdist2)
    hihatSampleCollection.set("hihat-electro", hihatelectro)
    hihatSampleCollection.set("hihat-plain", hihatplain)
    hihatSampleCollection.set("hihat-reso", hihatreso)
    hihatSampleCollection.set("hihat-ring", hihatring)
  
    kick808 = loadSound('assets/kicks/kick-808.wav', () => {});
    kickacoustic1= loadSound('assets/kicks/kick-acoustic01.wav', () => {});
    kickacoustic2= loadSound('assets/kicks/kick-acoustic02.wav', () => {});
    kickbig = loadSound('assets/kicks/kick-big.wav', () => {});
    kickclassic= loadSound('assets/kicks/kick-classic.wav', () => {});
    kickcultivator= loadSound('assets/kicks/kick-cultivator.wav', () => {});
    kickdeep= loadSound('assets/kicks/kick-deep.wav', () => {});
    kickdry= loadSound('assets/kicks/kick-dry.wav', () => {});
    kickelectro1= loadSound('assets/kicks/kick-electro01.wav', () => {});
    kickelectro2= loadSound('assets/kicks/kick-electro02.wav', () => {});
    kickfloppy= loadSound('assets/kicks/kick-floppy.wav', () => {});
    kickgritty= loadSound('assets/kicks/kick-gritty.wav', () => {});
    kickheavy= loadSound('assets/kicks/kick-heavy.wav', () => {});
    kicknewwave= loadSound('assets/kicks/kick-newwave.wav', () => {});
    kickoldschool= loadSound('assets/kicks/kick-oldschool.wav', () => {});
    kickplain= loadSound('assets/kicks/kick-plain.wav', () => {});
    kickslapback= loadSound('assets/kicks/kick-slapback.wav', () => {});
    kicksoftly= loadSound('assets/kicks/kick-softy.wav', () => {});
    kickstomp= loadSound('assets/kicks/kick-stomp.wav', () => {});
    kicktape= loadSound('assets/kicks/kick-tape.wav', () => {});
    kickthump= loadSound('assets/kicks/kick-thump.wav', () => {});
    kicktight= loadSound('assets/kicks/kick-tight.wav', () => {});
    kicktron= loadSound('assets/kicks/kick-tron.wav', () => {});
    kickvinyl1= loadSound('assets/kicks/kick-vinyl01.wav', () => {});
    kickvinyl2= loadSound('assets/kicks/kick-vinyl02.wav', () => {});
    kickzapper= loadSound('assets/kicks/kick-zapper.wav', () => {});
    kickSampleCollection.set("kick-808", kick808)
    kickSampleCollection.set("kick-acoustic01", kickacoustic1)
    kickSampleCollection.set("kick-acoustic02",kickacoustic2 )
    kickSampleCollection.set("kick-big", kickbig)
    kickSampleCollection.set("kick-classic",kickclassic )
    kickSampleCollection.set("kick-cultivator", kickcultivator)
    kickSampleCollection.set("kick-deep", kickdeep)
    kickSampleCollection.set("kick-dry", kickdry)
    kickSampleCollection.set("kick-electro01", kickelectro1)
    kickSampleCollection.set("kick-electro02", kickelectro2)
    kickSampleCollection.set("kick-floppy", kickfloppy)
    kickSampleCollection.set("kick-gritty", kickgritty)
    kickSampleCollection.set("kick-heavy", kickheavy)
    kickSampleCollection.set("kick-newwave", kicknewwave)
    kickSampleCollection.set("kick-oldschool", kickoldschool)
    kickSampleCollection.set("kick-plain", kickplain)
    kickSampleCollection.set("kick-slapback",kickslapback)
    kickSampleCollection.set("kick-softy", kicksoftly)
    kickSampleCollection.set("kick-stomp", kickstomp)
    kickSampleCollection.set("kick-tape", kicktape)
    kickSampleCollection.set("kick-thump", kickthump)
    kickSampleCollection.set("kick-tight", kicktight)
    kickSampleCollection.set("kick-tron", kicktron)
    kickSampleCollection.set("kick-vinyl01", kickvinyl1)
    kickSampleCollection.set("kick-vinyl02", kickvinyl2)
    kickSampleCollection.set("kick-zapper", kickzapper)
  
    clap808 = loadSound('assets/claps/clap-808.wav', () => {});
    clapanalog = loadSound('assets/claps/clap-analog.wav', () => {});
    clapcrushed = loadSound('assets/claps/clap-crushed.wav', () => {});
    clapfat = loadSound('assets/claps/clap-fat.wav', () => {});
    clapslapper = loadSound('assets/claps/clap-slapper.wav', () => {});
    claptape = loadSound('assets/claps/clap-tape.wav', () => {});
    clapSampleCollection.set("clap-808",clap808 )
    clapSampleCollection.set("clap-analog",clapanalog )
    clapSampleCollection.set("clap-crushed", clapcrushed)
    clapSampleCollection.set("clap-fat", clapfat)
    clapSampleCollection.set("clap-slapper", clapslapper)
    clapSampleCollection.set("clap-tape", claptape)
  
    snare808 = loadSound('assets/snares/snare-808.wav', () => {});
    snareacoustic1 = loadSound('assets/snares/snare-acoustic01.wav', () => {});
    snareacoustic2 = loadSound('assets/snares/snare-acoustic02.wav', () => {});
    snareanalog = loadSound('assets/snares/snare-analog.wav', () => {});
    snarebig = loadSound('assets/snares/snare-big.wav', () => {});
    snareblock = loadSound('assets/snares/snare-block.wav', () => {});
    snarebrute = loadSound('assets/snares/snare-brute.wav', () => {});
    snaredist1 = loadSound('assets/snares/snare-dist01.wav', () => {});
    snaredist2 = loadSound('assets/snares/snare-dist02.wav', () => {});
    snaredist3 = loadSound('assets/snares/snare-dist03.wav', () => {});
    snareelectro = loadSound('assets/snares/snare-electro.wav', () => {});
    snarelofi1 = loadSound('assets/snares/snare-lofi01.wav', () => {});
    snarelofi2 = loadSound('assets/snares/snare-lofi02.wav', () => {});
    snaremodular = loadSound('assets/snares/snare-modular.wav', () => {});
    snarenoise = loadSound('assets/snares/snare-noise.wav', () => {});
    snarepinch = loadSound('assets/snares/snare-pinch.wav', () => {});
    snarepunch = loadSound('assets/snares/snare-punch.wav', () => {});
    snaresmasher = loadSound('assets/snares/snare-smasher.wav', () => {});
    snaresumo = loadSound('assets/snares/snare-sumo.wav', () => {});
    snaretape = loadSound('assets/snares/snare-tape.wav', () => {});
    snarevinyl1 = loadSound('assets/snares/snare-vinyl01.wav', () => {});
    snarevinyl2 = loadSound('assets/snares/snare-vinyl02.wav', () => {});
    clapSampleCollection.set("snare-808", snare808)
    clapSampleCollection.set("snare-acoustic01", snareacoustic1)
    clapSampleCollection.set("snare-acoustic02", snareacoustic2)
    clapSampleCollection.set("snare-analog", snareanalog)
    clapSampleCollection.set("snare-big", snarebig)
    clapSampleCollection.set("snare-block", snareblock)
    clapSampleCollection.set("snare-brute", snarebrute)
    clapSampleCollection.set("snare-dist01", snaredist1)
    clapSampleCollection.set("snare-dist02", snaredist2)
    clapSampleCollection.set("snare-dist03", snaredist3)
    clapSampleCollection.set("snare-electro", snareelectro)
    clapSampleCollection.set("snare-lofi01", snarelofi1)
    clapSampleCollection.set("snare-lofi02", snarelofi2)
    clapSampleCollection.set("snare-modular", snaremodular)
    clapSampleCollection.set("snare-noise", snarenoise)
    clapSampleCollection.set("snare-pinch", snarepinch)
    clapSampleCollection.set("snare-punch", snarepunch)
    clapSampleCollection.set("snare-smasher", snaresmasher)
    clapSampleCollection.set("snare-sumo", snaresumo)
    clapSampleCollection.set("snare-tape", snaretape)
    clapSampleCollection.set("snare-vinyl01", snarevinyl1)
    clapSampleCollection.set("snare-vinyl02", snarevinyl2)
  
  }

function sampleDisplay(){
    hihatSample = createSelect();
    hihatSample.position(450,170);
    hihatSample.size(150, 30);
    hihatSample.style('background: black' );
    hihatSample.style('color: white');
    hihatSample.option("hihat-808");
    hihatSample.option("hihat-acoustic01");
    hihatSample.option("hihat-acoustic02");
    hihatSample.option("hihat-analog");
    hihatSample.option("hihat-digital");
    hihatSample.option("hihat-dist01");
    hihatSample.option("hihat-dist02");
    hihatSample.option("hihat-electro");
    hihatSample.option("hihat-plain");
    hihatSample.option("hihat-reso");
    hihatSample.option("hihat-ring");
    hihatSample.mousePressed(() => {changeSamples()});
    kickSample = createSelect();
    kickSample.position(450,250);
    kickSample.size(150, 30);
    kickSample.style('background: black' );
    kickSample.style('color: white');
    kickSample.option("kick-808");
    kickSample.option("kick-acoustic01");
    kickSample.option("kick-acoustic02");
    kickSample.option("kick-big");
    kickSample.option("kick-classic");
    kickSample.option("kick-cultivator");
    kickSample.option("kick-deep");
    kickSample.option("kick-dry");
    kickSample.option("kick-electro01");
    kickSample.option("kick-electro02");
    kickSample.option("kick-floppy");
    kickSample.option("kick-gritty");
    kickSample.option("kick-heavy");
    kickSample.option("kick-newwave");
    kickSample.option("kick-oldschool");
    kickSample.option("kick-plain");
    kickSample.option("kick-slapback");
    kickSample.option("kick-softy");
    kickSample.option("kick-stomp");
    kickSample.option("kick-tape");
    kickSample.option("kick-thump");
    kickSample.option("kick-tight");
    kickSample.option("kick-tron");
    kickSample.option("kick-vinyl01");
    kickSample.option("kick-vinyl02");
    kickSample.option("kick-zapper");
    kickSample.mousePressed(() => {changeSamples()});
    clapSample = createSelect();
    clapSample.position(450,290);
    clapSample.size(150, 30);
    clapSample.style('background: black' );
    clapSample.style('color: white');
    clapSample.option("clap-808");
    clapSample.option("clap-analog");
    clapSample.option("clap-crushed");
    clapSample.option("clap-fat");
    clapSample.option("clap-slapper");
    clapSample.option("clap-tape");
    clapSample.option("snare-808");
    clapSample.option("snare-acoustic01");
    clapSample.option("snare-acoustic02");
    clapSample.option("snare-analog");
    clapSample.option("snare-big");
    clapSample.option("snare-block");
    clapSample.option("snare-brute");
    clapSample.option("snare-dist01");
    clapSample.option("snare-dist02");
    clapSample.option("snare-dist03");
    clapSample.option("snare-electro");
    clapSample.option("snare-lofi01");
    clapSample.option("snare-lofi02");
    clapSample.option("snare-modular");
    clapSample.option("snare-noise");
    clapSample.option("snare-pinch");
    clapSample.option("snare-punch");
    clapSample.option("snare-smasher");
    clapSample.option("snare-sumo");
    clapSample.option("snare-tape");
    clapSample.option("snare-vinyl01");
    clapSample.option("snare-vinyl02");
    clapSample.mousePressed(() => {changeSamples()});
}