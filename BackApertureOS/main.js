const defaultBooleanConfig = {
    bool1: false,
    bool2: false,
    bool3: false,
    bool4: false,
    email: "",
    bool5: false,
    bool6: false,
    favoriteurl: `<div class="favoritepage" onclick="topage('brw-backaperture-aper')">
                                <div>
                                    <span class="name">BackAperture 主页</span>
                                    <span class="url">http://brw.backaperture.aper</span>
                                </div>
                                <span onclick="event.stopPropagation(); this.parentElement.remove(),savefavorite()"></span>
                            </div>

                            <div class="favoritepage" onclick="topage('brw-randomweb-aper')">
                                <div>
                                    <span class="name">随机有趣网站</span>
                                    <span class="url">http://brw.randomweb.aper</span>
                                </div>
                                <span onclick="event.stopPropagation(); this.parentElement.remove(),savefavorite()"></span>
                            </div>`,
    randomkey1: 0,
    randomkey2: 0
};

function getBooleanConfig() {
    const storedConfig = localStorage.getItem('booleanConfig');
    return storedConfig ? JSON.parse(storedConfig) : defaultBooleanConfig;
}

function betterRandom() {
  const x = Math.sin(Date.now() + Math.random() * 100000) * 10000;
  return x - Math.floor(x);
}

function initStorage() {
    const storedConfig = localStorage.getItem('booleanConfig');
    if (!storedConfig) {
        localStorage.setItem('booleanConfig', JSON.stringify(defaultBooleanConfig));
        const num1 = Math.floor(betterRandom() * 8);
        const num2 = Math.floor(betterRandom() * randomkeycode.length);
        console.log(num1);
        console.log(num2);
        updateBooleanConfig('randomkey1', num1);
        updateBooleanConfig('randomkey2', num2);
    }
}

function initCDKEY() {
    const config = getBooleanConfig();
    document.getElementById(`cdk${config.randomkey1}`).id = "truecdk";
}

document.addEventListener('DOMContentLoaded', function() {
    downloadfolder();
  setTimeout(function() {
    var setup1 = document.getElementById('setup1');
    var setup2 = document.getElementById('setup2');
    if (setup1) setup1.style.display = 'none';
    if (setup2) setup2.style.display = 'block';
  }, 2400);

  setTimeout(function() {
    var setup2 = document.getElementById('setup2');
    if (setup2) setup2.style.display = 'none';
  }, 2520);

  setTimeout(function() {
    var setuptitle = document.getElementById('setuptitle');
    if (setuptitle) setuptitle.style.display = 'block';
  }, 2600);

  setTimeout(function() {
    var setup3 = document.getElementById('setup3');
    if (setup3) setup3.style.display = 'flex';
  }, 2630);

  setTimeout(function() {
    var beforeopen = document.getElementById('beforeopen');
    if (beforeopen) beforeopen.style.display = 'block';
  }, 1000);

  setTimeout(function() {
    var beforeopen = document.getElementById('beforeopen');
    if (beforeopen) beforeopen.style.display = 'none';
  }, 2530);

  setTimeout(function() {
    var openos = document.getElementById('openos');
    if (openos) openos.style.display = 'flex';
  }, 2630);

  setTimeout(function() {
    var openos = document.getElementById('openos');
    var mainoswindow = document.getElementById('mainoswindow');
    if (openos) openos.style.display = 'none';
    if (mainoswindow) mainoswindow.style.display = 'block';
    
  }, 9500);

  setTimeout(function() {
    var openos = document.getElementById('mainostopbar');
    if (openos) openos.style.display = 'flex';
  }, 10150);

  setTimeout(function() {
    const config = getBooleanConfig();
    if(config.bool1 && !config.bool4) {
        openwelcome();
        updateBooleanConfig('bool4', true);
    };
  }, 10225);

  setTimeout(function() {
    var openos = document.getElementById('mainoscontent');
    if (openos) openos.style.display = 'flex';
  }, 10290);
});
   initCDKEY();

function reboot(){
    setTimeout(function() {
    location.reload();
}, 500);
}

function close1() {
    setTimeout(function() {
window.__TAURI__.core.invoke("exit_app");
}, 500);
}

function close2() {
    setTimeout(function() {
window.__TAURI__.core.invoke("exit_app");
}, 500);
}

function change(id1,id2){
    var setup1 = document.getElementById(id1);
    var setup2 = document.getElementById(id2);
    if (setup1) setup1.style.display = 'none';
    if (setup2) setup2.style.display = 'flex';
    if (id2 == "setup4") {
        setTimeout(function() {
            if (document.getElementById("setup4")) document.getElementById("setup4").style.display = 'none';
            if (document.getElementById("setup5")) document.getElementById("setup5").style.display = 'flex';
        }, 4100);
    }
    if (id2 == "setup8") {
        setTimeout(function() {
            if (document.getElementById("introduce1")) document.getElementById("introduce1").style.display = 'none';
            if (document.getElementById("introduce2")) document.getElementById("introduce2").style.display = 'flex';
        }, 25000);
        setTimeout(function() {
            if (document.getElementById("introduce2")) document.getElementById("introduce2").style.display = 'none';
            if (document.getElementById("introduce3")) document.getElementById("introduce3").style.display = 'flex';
        }, 50000);
        setTimeout(function() {
            if (document.getElementById("introduce3")) document.getElementById("introduce3").style.display = 'none';
            if (document.getElementById("introduce4")) document.getElementById("introduce4").style.display = 'flex';
        }, 75000);
        setTimeout(function() {
            if (document.getElementById("introduce4")) document.getElementById("introduce4").style.display = 'none';
            if (document.getElementById("introduce5")) document.getElementById("introduce5").style.display = 'flex';
        }, 100000);
        setTimeout(function() {
            if (document.getElementById("introduce5")) document.getElementById("introduce5").style.display = 'none';
            if (document.getElementById("introduce6")) document.getElementById("introduce6").style.display = 'flex';
        }, 125000);
        setTimeout(function() {
            if (document.getElementById("introduce6")) document.getElementById("introduce6").style.display = 'none';
            if (document.getElementById("introduce7")) document.getElementById("introduce7").style.display = 'flex';
        }, 150000);
        setTimeout(function() {
            if (document.getElementById("setup8")) document.getElementById("setup8").style.display = 'none';
            if (document.getElementById("setup9")) document.getElementById("setup9").style.display = 'flex';
        }, 157000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.serial-input');
    const submitBtn = document.getElementById('setup-submit-btn');
    
    inputs.forEach(input => {
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeyDown);
    });
    
    submitBtn.addEventListener('click', showResult);
    
    function handleInput(e) {
        const currentInput = e.target;
        const currentIndex = parseInt(currentInput.dataset.index);
        
        if (currentInput.value.length === 4 && currentIndex < inputs.length) {
            document.getElementById(`serial${currentIndex + 1}`).focus();
        }
        
        checkCompletion();
    }
    
    function handleKeyDown(e) {
        const currentInput = e.target;
        const currentIndex = parseInt(currentInput.dataset.index);
        
        if (e.key === 'Backspace' && currentInput.value.length === 0 && currentIndex > 1) {
            document.getElementById(`serial${currentIndex - 1}`).focus();
        }
    }
    
    function checkCompletion() {
        let allFilled = true;
        
        inputs.forEach(input => {
            if (input.value.length !== 4) {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    }
    
    function showResult() {
        const values = [];
        
        inputs.forEach(input => {
            values.push(input.value);
        });
        
        const serialNumber = values.join('-');
        validateSerial(serialNumber.toUpperCase());
    }
});

function openwarning2(content){
    document.getElementById('setupwarningblock2').style = "display:flex";
    document.getElementById('blockallblock').style = "display:flex";
    document.getElementById('setupwarning2').innerHTML = content;
}

function openwarning(content){
    document.getElementById('setupwarningblock').style = "display:flex";
    document.getElementById('setupwarning').innerHTML = content;
}

function openwelcome(){
    document.getElementById('welcome').style = "display:flex";
    document.getElementById('blockallblock').style = "display:flex";
}

function closewarning(){
    document.getElementById('setupwarningblock').style = "display:none";
}

function closewarning2(){
    document.getElementById('setupwarningblock2').style = "display:none";
    document.getElementById('blockallblock').style = "display:none";
}

function closewelcome(){
    document.getElementById('welcome').style = "display:none";
    document.getElementById('blockallblock').style = "display:none";
}


function validateSerial(serialNumber) {
    const serial = serialNumber;

    if (!serial) {
        openwarning("请输入验证码！")
        return;
    }

    const isValid = validateSerialFormat(serial);
    if (isValid){
        change('setup7','setup8');
    }
    else {
        openwarning("产品验证码错误，请重试。");
    }
}

function validateSerialFormat(serial) {
    if (!/^[0-9A-F]{4}(-[0-9A-F]{4}){4}$/i.test(serial)) {
        return false;
    }

    const parts = serial.split("-");
    const mainPart = parts.slice(0, 4).join("-");
    const checksum = parts[4];

    const calculatedChecksum = CryptoJS.MD5(mainPart)
        .toString(CryptoJS.enc.Hex)
        .substring(0, 4)
        .toUpperCase();

    return checksum === calculatedChecksum;
}

let getkey = false;
let getkeytemp = 0;
let getkeytempbool = false;
document.getElementById('truecdk').addEventListener('click', function() {
    if (!getkeytempbool && !getkey){
        getkeytempbool = true;
        setTimeout(function() {
            getkeytempbool = false;
            getkeytemp = 0;
        }, 2000);
    }
    else if (!getkey) {
        getkeytemp ++;
        if(getkeytemp >=10) {
            document.getElementById("truecdk").innerHTML += randomkeycode[getBooleanConfig().randomkey2];
            getkey = true;
        }
    }
});


document.addEventListener('DOMContentLoaded', initStorage);
document.addEventListener('DOMContentLoaded', checkBooleanValues);

function checkBooleanValues() {
    const config = getBooleanConfig();

    if (config.bool1) document.getElementById('osmain').style = "display:block";
    else document.getElementById('setup').style = "display:block";
}

const randomkeycode = ["36VT4-75AQG-YXH6Y","TH7HA-PET9G-3QPCC","HX2FQ-RFFGY-VE7G8","AY5GB-Q60HR-XMJVI","CH3V3-9M3KQ-APJ29"]

function updateBooleanConfig(key, value) {
    const config = getBooleanConfig();
    config[key] = value;
    localStorage.setItem('booleanConfig', JSON.stringify(config));
}


window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const draggableElements = document.querySelectorAll('.move');
    
    draggableElements.forEach(element => {
        let isDragging = false;
        let offsetX, offsetY;
        
        element.addEventListener('mousedown', function(e) {
            isDragging = true;
            
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    });
});

function updateClock() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockStr = `${hours} : ${minutes} : ${seconds}`;
    
    document.getElementById('clocktime').innerHTML = clockStr;
    
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear() - 40;
    document.getElementById('clockdate').textContent = `${day} / ${month} / ${year}`;
}

updateClock();
setInterval(updateClock, 1000);

function openclock() {
    document.getElementById('clock').style = "display: flex";
}

function opennotebook() {
    document.getElementById('notebook').style = "display: flex";
}

function opencalculator() {
    document.getElementById('calculator').style = "display: flex";
}

function closewindow(name) {
    document.getElementById(name).style = "display: none";
    if (name != "clock" && name != "notebook" && name != "calculator") document.getElementById("mainoscontent").style = "display: flex";
}

function openfolder(name,name2) {
    document.getElementById(name).style = "display: flex";
    document.getElementById(name2).style = "display: none";
}

document.addEventListener('keydown', function(e) {
/*  if (e.key.startsWith('F') && e.key.length > 1) {
    e.preventDefault();
    return false;
}*/

  if (e.ctrlKey || e.altKey || e.metaKey) {
    e.preventDefault();
    return false;
  }

  const forbiddenKeys = [
    'Escape', 'Tab', 'PrintScreen', 
    'Insert', 'Delete', 'Pause'
  ];
  if (forbiddenKeys.includes(e.key)) {
    e.preventDefault();
    return false;
  }
});

let randomcode = undefined;
let cooldown = false;
let cooldownTimer;
const reservedUsernames = ["geoffreyparker5902", "arthurdavid777", "pamelareynolds9" , "rickythegroovy", "lindamitchell67", "tronaldjjdump"];

function closeWarn() {
    document.getElementById('banm_warn_block').style = "display: none;";
}

function openWarn(content) {
    document.getElementById('banm_warn_block').style = "display: flex;";
    document.getElementById('banm_warn_content').innerText = content;
}

function verifyEmail() {
    if (cooldown) {
    openWarn('请等待1分钟后再发送验证码！');
    return;
    }
    
    const email = document.getElementById('banm_reg_email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) {
    openWarn('请输入有效的邮箱格式，如：example@xxx.email');
    }
    else {
    sendMail(1);
    startCooldown();
    openWarn('验证码发送成功，请注意在邮箱中查收。');
    }
}

function startCooldown() {
    cooldown = true;
    const btn = document.getElementById('sendCodeBtn');
    btn.disabled = true;
    
    let seconds = 60;
    const originalText = btn.textContent;
    
    cooldownTimer = setInterval(() => {
    btn.textContent = `等待${seconds}秒`;
    seconds--;
    
    if (seconds < 0) {
        clearInterval(cooldownTimer);
        cooldown = false;
        btn.disabled = false;
        btn.textContent = originalText;
    }
    }, 1000);
}

function verifyCode() {
    const isReg = localStorage.getItem('isReg');
    const tempcode = document.getElementById('banm_reg_regcode').value;
    const username = document.getElementById('banm_reg_usnm').value;
    const password = getPassword2();
    const email = document.getElementById('banm_reg_email').value;

    console.log(password)
    
    if (isReg == 'true') {
    openWarn('注册系统故障，请联系网站管理员。');
    }  
    else if (username === "") {
    openWarn('请输入账号！');
    }
    else if (username.length <= 8) {
    openWarn('用户名必须大于8个字符！');
    }
    else if (reservedUsernames.includes(username)) {
    openWarn('账号已被注册！');
    }
    else if (password === "") {
    openWarn('请输入密码！');
    }
    else if (password.length <= 8) {
    openWarn('密码必须大于8个字符！');
    }
    else if (email === "") {
    openWarn('请输入邮箱！');
    }
    else if (tempcode === "") {
    openWarn('请输入验证码！');
    }
    else if (tempcode !== randomcode) {
    openWarn('验证码错误！');
    }
    else {
    sendMail(2);
    localStorage.setItem('isReg', 'true');
    openWarn('注册失败，请联系网站管理员。');
    }
}

function sendMail(scenario) {
    let email = "";
    if (!localStorage.getItem('isReg')) {
        email = document.getElementById('banm_reg_email').value;
        updateBooleanConfig('email', email);
        console.log("1");
    }
    else {
        const config = getBooleanConfig();
        email = config.email;
        console.log("2");
    }
    
    fetch('服务器域名', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        to: email,
        scenario: scenario,
        name: "",
        sex: ""
    })
    })
    .then(res => res.json())
    .then(data => {
    if (data.success) {
        if (data.verificationCode) {
        randomcode = data.verificationCode;
        console.log('Verification code stored:', randomcode);
        }
    } else {
    }
    })
    .catch(err => {
    });
}

function openregister(num){
    if (num==1) {
        document.getElementById('baos_login').style = "display:none";
        document.getElementById('baos_register').style = "display:flex";
    }
    if (num==2) {
        document.getElementById('baos_register').style = "display:none";
        document.getElementById('baos_login').style = "display:flex";
    }
}

function clearAllInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    if (input.id != "browserAddress") {
        if(input.type != "radio")input.value = '';
        else input.checked = false;
    };
  });
  realValue = '';
    realValue2 = '';
}

let realValue = '';
let realValue2 = '';

document.getElementById('banm_login_pswd').addEventListener('input', function(e) {
  const newChar = e.data || '';
  const isDeleting = e.inputType === 'deleteContentBackward';
  
  realValue = isDeleting 
    ? realValue.slice(0, -1)
    : realValue + newChar;
  
  e.target.dataset.realValue = realValue;
  
  e.target.value = '*'.repeat(realValue.length);
});

function getPassword() {
  return realValue;
}

document.getElementById('banm_reg_pswd').addEventListener('input', function(e) {
  const newChar = e.data || '';
  const isDeleting = e.inputType === 'deleteContentBackward';
  
  realValue2 = isDeleting 
    ? realValue2.slice(0, -1)
    : realValue2 + newChar;
  
  e.target.dataset.realValue2 = realValue2;
  
  e.target.value = '*'.repeat(realValue2.length);
});

function getPassword2() {
    return realValue2;
}

function banmlogin() {
    const username = document.getElementById('banm_login_usnm').value;
    const password = getPassword();

    console.log(username,password)

    if (username == "geoffreyparker5902" && password == "0204dalmatian"){
        openfolder('banmafterlogin','banm')
    }
    else if(username == "") openWarn('请输入用户名！');
    else if(password == "") openWarn('请输入密码！');
    else openWarn('用户名或密码错误，请重试。');
}

let elements = [
    document.getElementById('notebook'),
    document.getElementById('clock'),
    document.getElementById('calculator')
];

elements[0].style.zIndex = "42";
elements[1].style.zIndex = "41";
elements[2].style.zIndex = "40";

function frontview(name) {
    const targetElement = document.getElementById(name);
    const currentIndex = elements.findIndex(el => el === targetElement);
    
    if (currentIndex === 0) return;
    
    elements.splice(currentIndex, 1);
    elements.unshift(targetElement);
    
    elements.forEach((el, index) => {
        el.style.zIndex = (42 - index).toString();
    });
}

document.getElementById('calculator').addEventListener('mousedown', function(event) {
    frontview('calculator');
});

document.getElementById('notebook').addEventListener('mousedown', function(event) {
    frontview('notebook');
});

document.getElementById('clock').addEventListener('mousedown', function(event) {
    frontview('clock');
});

document.getElementById("banm_login_usnm").addEventListener("input", function(e) {
    setTimeout(function() {
    if (e.target.value == "arthurdavid777") document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAAxQTFRF////wMDAAAAAAAAA9vDZuQAAAAR0Uk5T////AEAqqfQAAAJSSURBVFiFtZeJbsQgDEQ97P//czf4wBcQtWpUtSq7fozxYAJ9/vjQvwGGPr8CfONInwulA7hoR3kNaMJPjALw4SiMO2DF48n9jqBdvBahZvIOgB0gI6iPNwHISWQE9fFk8R3g+3ELCAVQgg9zuHEDCAF5xBCjAvJ6JflZ0zgCvrEpeStLyoKaeHQeMsD8AEboAG0FkUbxDHnAqHNFDQUL6gFRa5EAyQCSAxUBexNiQZny5LAHwCuwhXMjAXA2IaYpiqAdYGdCHYJM/5S7B2xNGJOCA4xtbIgPWaEFtCakAphr+l3mCjg5gJuDWOCZfjmxmmjjIYSxBnA2ocvgEXAAxKl0aWBV5JG5BDsFlJ9YVmIBCqgbsZjQrKx74SsA1g+8C8r8KBtLLMACMiAZCW5v+kQ4vgekZ2dCFfAeMNwizBTeAdptwOF3ABwB0uchZbH4awpNYYOAK8C6iyyACsBrgBRW2pAJgD8bh35aW0n6K+eJE6B7gVtcgzDv2g+3nASAJAtQOVUpNHVwI0B6PxjzODa/5BPALYfs7JEB0qV138DWxJ1E1hmAJcDaunR6b5q4hFAFw/aRB6gGPoF0SU3COlHmNnIC3OnMgfyEqiwLPUNJgH/BcMEmxiejE4wN4MNsLaWud9hFVOLTi6bVAfZd+c/igQNgiXAagqYioL7uDywNqiITToCPzG8VlaVEn0B7Z1ozak3sN4IJd4B5aTO5WNYWBS8ALMO2rrNFiT/cXDnUlaFL4HL1nbHmhVbA9e7MOvRp7n0vLt/rcOpunn++vf8ABG4XT7qFvVgAAAAASUVORK5CYII=";
    else if (e.target.value == "geoffreyparker5902") document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAA9QTFRF////AAAAwMDAAAAAAAAAX0exBAAAAAV0Uk5T////AP9FkBysAAACs0lEQVRYhaWWC3LDMAhEYX3/O7fmj4Rsd6rppJkkPMOyQqLrn4sevuNl/Q3wG0BEkD+SdxgRB4BEbwsDYQQcwkfCBBjDbW2EAfAUv+ewA07pH3LYAPPzgXzHj4BD/ox7TSksAMYQfVvg1wRshJ4C7fFgNAzEQ/eCavEEkHj5aU//ziCKaCk0gCXAPQcIgeVj7cczwB7Wa5Bo/xh1V4wAbF5WDaMPZWtWgJSOoncxEFDevwBSLFq74bIWwgZoz1WI4cD2nUrKG2BpH9YMUpiPAEAZrn1RBkdAK5ndPgZgagB+BsBHKfzRRaERwA0Q8UroXbA+8AtAt2Bz0JACtfhFZ0+hd6OLQC3+BFgcdQbk72o8NkI5qqglcBDxEC8EBbhcpY1sI8D3dqEUeAJyYhSZPHxJgTeANOpWgH0bEmoTnaDf8jUA9GGEbENYYTGBDLRCoFQQFeC9gn4emelI7YAqd+w43YZs4zii7625AnrHK0FFQDpR6mqAqwOY8nlWgCCzgiV+BKgf9TjzYexeYpvoEX6ZBm4NkL7ClofDJ1ONR1g5CZa4j2Z/zSw0qsSbD5xgAKR5fLS2MykLCCuzW78e46QO8P9mUPs5+lD189M4No7JB3N42QHgBXDp6GNG1EJ2TNkJhQbYMjBCAGwKwIvwXKz01HAdqgmIgzJcLRvZ4iJ+ORtDCqnG7hZC0IxS/PF0viIDFGMjNWjn+gzI+1SaIo8U7PEbAFQ0QDjQp+ILIG9pnPek6OZyOXoDxCC1PYAvGdxjHToL85DR7cR+xL9pkIPfU4DdE/FNRHsmc4PZ1fMjAL6l+jGCUcPNiWSGTQ2yKVMCB4AQXMQg8EsGkTY4K0hjaWUPgBKlEeTeqZv0G8DHUsn/FF8GyiYcIYeDk84AprwQegpZPerF7gTA0DvXP4rZAT8d2BkGucBXcAAAAABJRU5ErkJggg==";
    else if (e.target.value == "tronaldjjdump") document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAABVQTFRF////AAAA+/8KwMDA8owYej0AAAAAPGHvngAAAAd0Uk5T////////ABpLA0YAAAJsSURBVFiFpZeLmusgCIQlDH3/Rz6CN1Rozn4l2+0mdX4HJG5aPj9GSa5Tix8AIs/zyDshB1R5RbwSMoDmUAnySkgBivgRoIj3HL4ClPAb4FMBL4SXFPjBy1LmgFrD0uJrQ+WdyGUF54QEsMmbi78AiMoVmYkIcE1vgZgQAGK9pvF/gFQfEy4AwfwWbPaREk6AzY9NbaeAMoM6lEBfR4v2wcQwST+71+IENP+2nU0DdmoE3EmUW6/zkDayzokH5ocE8WJuAOq1A4uwJVM3tQeFpebACBvKA+bdA25yPG1jxLxwr8QGONbusRD1sC6eSTjA0UFd3yJvJw/Y++e5ASh3MyyAX/iT0FcgsuAAbaHDJNZltbAtxARQX0OcBCz5yDAGtGbfkqg97abHhMSAcjswD1gFGCN8Dg7At4PSb8XNwW5hAIh7BhGky/QznN04AcXXIGJ4SATA4QCbZn1mf7gieAfTwtY3ew/g7IQOqLc7MLLwDYVNOI8bwMCygDKt+1zQqxgDyuUAsYN6z3KUAjOwRu0O4CG63cgNIN3EwEcBXUHrwboxsW53AUA0bCtkBfmjh+gxInRg+g5q43dRn8JeqYP8EDPfh1HsYM4wpp5vIruTu5UHQLppP/OoTliC1couySFjcRe3anwB+FoeGKePAHQM4lBq8hBwE/KgeE9U9Nv0ZNMngHcL1H9l/1gMf2h4afWnO4gBnybPfHTEqd8AoYeReROfFTieD2gMFFdSGqXvBfzygGFfFmUd821cj75KHg9Z5BkeRiM+XwEtiwbxMqEo/QjwWYJlPJ8+AMxvzXcE6hAQQmJxDvhD/APb2UBZpIDd4QAAAABJRU5ErkJggg==";
    else if (e.target.value == "rickythegroovy") document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcJJREFUeJztmNuOwyAMRCdou///vakE+9JkCc3FBsJE4CP1oYiEYcDgGBiciTbw9Arx/xDeFC2cQT+T934GADj3C4BjQvsBk8kvsExwLQdbSCd/1NYCigFPwgygDPqJ96u2Fgx/C1B2wN5EWXnA8GfAT60XpZnd3c/X2jHVDADy73LtczUPzOFDwAxgC2BjBrAFsDED2ALYVM0D9kjv7Ks7X9u/lM0OmKZXWH5nbeKXK7/6GF+JqwFHpaq4TWNCLNz7efPeq4lK+tfCAeeTj0XFfaXE75RsZ23/UtYdoBXXCy4ntnNDQbKVtf1LcYBuZaV90xhOY7y0fy0O84Dckz9GW/5mlMt38wDv53UFSgVon299zhwmQj0eeHs4QHfYsMrXd+FyamusCu4drIeg9orqBQf8r6gkT+9p9YFoB0gm1tvkAasHmAHqgshZdtjykDzSoQ3TrIrQU5OknAUYPgTMALYANmYAWwAbM4AtgM3wBqgSodIaYQs0GkN4T2IDnpr9xWg0Llnj8CFgBrAFsDED2ALYfN0Ckm/qp94Ie9qvtG4MkFRTnp4LxHOQaB0+BMwAtgA2ZgBbABszgC2AzfAG/AGLO86BUcnVOAAAAABJRU5ErkJggg==";
    else if (e.target.value == "pamelareynolds9") document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxVJREFUeJztWs1uwjAMdqvBlcOelafgWTlw3SS6w2RkXNv5ktZrYfkkNJY4juP4LwlEHR0dHR0dHf8VQwrT4TChtNP0nSIDio8sxvf7l9s3jke6379oHI9Z08MYU5mPx8ci5fc9IU0B3mL3poQUF5B+LeMBt9fEiGykxQAUWkGWcjID5aYKkIFyHI8PZVjtWUrYVAEyHnBW0NkhO1ts7gKW2UcpdG1srgALf5kpUusAvbN7iv6MdAtgc0Z9meOAbsvCTAHRLrVEYrQgkv9vWiz9ppw5huEwtZow83wpF9C7wCacmZO3QBgEp+l74MVavvkOgLLAO+24RpgFIp9d4s+lsd6ZAEU0Xm+mqwDL3DkuWDW77I/SmBxr0UdnAjmO+zQPb7yWgwEHQUtoXbNb7RZKfEpnAkt5loKQdBq6gD7XS8bebntjLWE1vXcU1u1RDSHbLAua0ZmtILQySmDaNbKJ9mUrUPN80ZxVQTAy3dJYLZge79G3BsPFLhAFwRJNFHy0SXumipqwB3S8eXcXITNFLaFBx+i2pxhwu3xG44kIUxTz4UpSfpDxXG5Hn5qjtqxoNWYugCihBVLA0hyn8/VBrwWv4VPiReTEgNP5ajKTEyI0DBagNJ77+S8Lr3dc9ke4XT6LtDMFMGGkeYZFczpfnxaqFy8F0bWC7GPh5Q5aCvRM25LFglkHtB5+PKXpxVs+Kf1b0jJqFi/7SlaSeidINHcJRLkRDbL4mrnCJ6wnwuEw6V3w6Ph77a6hfGostLSuj6izBdH7X80cS+sNdM4UF9CCl/wwApJ5liAtBrT4PoK1b6fSg+DescunsSWo/X3S2ymACC+RiV7QApB3CV1RWu2Ml4oByM7qirLU/2cKaM3p1q6t+cSWpgDPDFF4i1z7uJ6igOiEVsMnOsquZQWpLtBqBdbiLF5rvFyFCuAn8ejG1uv3jqMIP6JnhVm8pBI0T4uHu8awU50APUQnNPQ2iBGdIKOFIfcHktdDPlcSqq+qED6oK9TcTCEKcTcIkmYl1AYu6EJj5Z/0dHR0dHR0dPwf/ABNvLlOCKsf3wAAAABJRU5ErkJggg==";
    else document.getElementById("loginavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2hJREFUeJztWs1u2zAMpty5A7oXcNJjH8TpYU/dQ+IH2bXJpccNWI1FOyRMJFk/pC3RXpYPMJBEjqXvE0VSlAHuuOOOO+74f6Fm6lcHfhcfj3SHGgBgt9t5GzebDX4UG5dUR1HiJgwRAATGJyGAphA3ISlCaQHY5BFSIlSlHgwR8m3bsp81dTAhlBRggLZtL+RTIoy1HC5KmdZg9kOEu66LPqj0UhCxgBEmL4YSAlizn5l8dl8g6gPGoLQvWLwApTGrACkHKIHZBFgCeQABAXxEOeSdMJgdYnnAWNxEHrBklNwMTbYCiQ3RYi2g9NpHLHI77CFfbJyLK4hIki/+cAOkkpg0eZEOHFA3MzdXFHUxWBbn2Rcfz2KjgBTmsICgU5zDCr5Idga0iKDhLIJSteUztO7/yVRY44XkY1UipWpQqtZI/vBew+G9xrbsFaGiqTDAKfSlCqKvr9+t35Gwi2bdXx+eyRpKCJAkjqiqx8vnEGkfUIgcIuQUwEp2QuRN0gBx4i/qukJ/6KPVlkuEXAKQ1jeST822SdxECRFyCKBT5t51HbRtC1X16CX/Z/XL+v6sTvd8238d3JtbhKkCBMmbZS9sdwVwiZuQEmGKAF7ybr3PbDcFiJFHSIgwNg9Ikh9b0HhW9eVC/Fz9Htz3oirLV4zNFcZYAJW8AgCt9Wk8rgMMrfsYfJYAYFtDs+5ZVsC1AA75ATix3gefJUwFewkwDjvJpkiZfURMBDNTpIIjgHcjE5t9qZccTGjdAzDEZ1kAZ/aRvO8UiBIBpEAVILmNnaui44ZDAyQrIFtAKtmJduLk/1NgRoIcTjFLPYAy+6EIwHGAACfSePnA9TsUAbiHG+NekdEfjB4+rtcZgQiQXAajLYB7vm8O8GH/ZDcikZgIHtIutts3AOBZweQlQDH/4/ETAIYiDIQAsAkmSB/2DXe4A4iVxX0iAAR8Q2KmU+DsQ3ILEPUXQRGYM3nYN8H/cDdh1Lht7QG6rgu9209ygKHKULM6BAcQE8nYCrtNSX6cxMX1qL7/JgVwK8ExESikLx3b5Mm8cmdu0XeE3chhlsOpO8XcpfHiAlAQsgaEZ7azjXsRh6MYv02izbq/XAAnE8crJxYhAIAtApLebt+KkDZR5GQoRx0gEs6yjrnY0VhBzPVSx23iL+ZL23BKIf3FAAAAAElFTkSuQmCC";
  }, 1200);
});

function openchat(name) {
    scrolltotop();
    document.getElementById("baoschat").style = "display: flex";
    document.getElementById("baossend").style = "display: flex";
    const draggableElements = document.querySelectorAll('.friend');
    draggableElements.forEach(element => {
        element.className = "friend";
    });

    const draggableElements2 = document.querySelectorAll('.subchat');
    draggableElements2.forEach(element => {
        element.style = "display:none";
    });

    if (name == "david") {
        document.getElementById("chat-david").style = "display: block";
        document.getElementById("friend-david").className = "friend select";
        document.getElementById("chatavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAAxQTFRF////wMDAAAAAAAAA9vDZuQAAAAR0Uk5T////AEAqqfQAAAJSSURBVFiFtZeJbsQgDEQ97P//czf4wBcQtWpUtSq7fozxYAJ9/vjQvwGGPr8CfONInwulA7hoR3kNaMJPjALw4SiMO2DF48n9jqBdvBahZvIOgB0gI6iPNwHISWQE9fFk8R3g+3ELCAVQgg9zuHEDCAF5xBCjAvJ6JflZ0zgCvrEpeStLyoKaeHQeMsD8AEboAG0FkUbxDHnAqHNFDQUL6gFRa5EAyQCSAxUBexNiQZny5LAHwCuwhXMjAXA2IaYpiqAdYGdCHYJM/5S7B2xNGJOCA4xtbIgPWaEFtCakAphr+l3mCjg5gJuDWOCZfjmxmmjjIYSxBnA2ocvgEXAAxKl0aWBV5JG5BDsFlJ9YVmIBCqgbsZjQrKx74SsA1g+8C8r8KBtLLMACMiAZCW5v+kQ4vgekZ2dCFfAeMNwizBTeAdptwOF3ABwB0uchZbH4awpNYYOAK8C6iyyACsBrgBRW2pAJgD8bh35aW0n6K+eJE6B7gVtcgzDv2g+3nASAJAtQOVUpNHVwI0B6PxjzODa/5BPALYfs7JEB0qV138DWxJ1E1hmAJcDaunR6b5q4hFAFw/aRB6gGPoF0SU3COlHmNnIC3OnMgfyEqiwLPUNJgH/BcMEmxiejE4wN4MNsLaWud9hFVOLTi6bVAfZd+c/igQNgiXAagqYioL7uDywNqiITToCPzG8VlaVEn0B7Z1ozak3sN4IJd4B5aTO5WNYWBS8ALMO2rrNFiT/cXDnUlaFL4HL1nbHmhVbA9e7MOvRp7n0vLt/rcOpunn++vf8ABG4XT7qFvVgAAAAASUVORK5CYII=";
    }

    if (name == "dump") {
        document.getElementById("chat-dump").style = "display: block";
        document.getElementById("friend-dump").className = "friend select";
        document.getElementById("chatavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAABVQTFRF////AAAA+/8KwMDA8owYej0AAAAAPGHvngAAAAd0Uk5T////////ABpLA0YAAAJsSURBVFiFpZeLmusgCIQlDH3/Rz6CN1Rozn4l2+0mdX4HJG5aPj9GSa5Tix8AIs/zyDshB1R5RbwSMoDmUAnySkgBivgRoIj3HL4ClPAb4FMBL4SXFPjBy1LmgFrD0uJrQ+WdyGUF54QEsMmbi78AiMoVmYkIcE1vgZgQAGK9pvF/gFQfEy4AwfwWbPaREk6AzY9NbaeAMoM6lEBfR4v2wcQwST+71+IENP+2nU0DdmoE3EmUW6/zkDayzokH5ocE8WJuAOq1A4uwJVM3tQeFpebACBvKA+bdA25yPG1jxLxwr8QGONbusRD1sC6eSTjA0UFd3yJvJw/Y++e5ASh3MyyAX/iT0FcgsuAAbaHDJNZltbAtxARQX0OcBCz5yDAGtGbfkqg97abHhMSAcjswD1gFGCN8Dg7At4PSb8XNwW5hAIh7BhGky/QznN04AcXXIGJ4SATA4QCbZn1mf7gieAfTwtY3ew/g7IQOqLc7MLLwDYVNOI8bwMCygDKt+1zQqxgDyuUAsYN6z3KUAjOwRu0O4CG63cgNIN3EwEcBXUHrwboxsW53AUA0bCtkBfmjh+gxInRg+g5q43dRn8JeqYP8EDPfh1HsYM4wpp5vIruTu5UHQLppP/OoTliC1couySFjcRe3anwB+FoeGKePAHQM4lBq8hBwE/KgeE9U9Nv0ZNMngHcL1H9l/1gMf2h4afWnO4gBnybPfHTEqd8AoYeReROfFTieD2gMFFdSGqXvBfzygGFfFmUd821cj75KHg9Z5BkeRiM+XwEtiwbxMqEo/QjwWYJlPJ8+AMxvzXcE6hAQQmJxDvhD/APb2UBZpIDd4QAAAABJRU5ErkJggg==";
    }

    if (name == "ricky") {
        document.getElementById("chat-ricky").style = "display: block";
        document.getElementById("friend-ricky").className = "friend select";
        document.getElementById("chatavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcJJREFUeJztmNuOwyAMRCdou///vakE+9JkCc3FBsJE4CP1oYiEYcDgGBiciTbw9Arx/xDeFC2cQT+T934GADj3C4BjQvsBk8kvsExwLQdbSCd/1NYCigFPwgygDPqJ96u2Fgx/C1B2wN5EWXnA8GfAT60XpZnd3c/X2jHVDADy73LtczUPzOFDwAxgC2BjBrAFsDED2ALYVM0D9kjv7Ks7X9u/lM0OmKZXWH5nbeKXK7/6GF+JqwFHpaq4TWNCLNz7efPeq4lK+tfCAeeTj0XFfaXE75RsZ23/UtYdoBXXCy4ntnNDQbKVtf1LcYBuZaV90xhOY7y0fy0O84Dckz9GW/5mlMt38wDv53UFSgVon299zhwmQj0eeHs4QHfYsMrXd+FyamusCu4drIeg9orqBQf8r6gkT+9p9YFoB0gm1tvkAasHmAHqgshZdtjykDzSoQ3TrIrQU5OknAUYPgTMALYANmYAWwAbM4AtgM3wBqgSodIaYQs0GkN4T2IDnpr9xWg0Llnj8CFgBrAFsDED2ALYfN0Ckm/qp94Ie9qvtG4MkFRTnp4LxHOQaB0+BMwAtgA2ZgBbABszgC2AzfAG/AGLO86BUcnVOAAAAABJRU5ErkJggg==";
    }

    if (name == "michell") {
        document.getElementById("chat-michell").style = "display: block";
        document.getElementById("friend-michell").className = "friend select";
        document.getElementById("chatavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2hJREFUeJztWs1u2zAMpty5A7oXcNJjH8TpYU/dQ+IH2bXJpccNWI1FOyRMJFk/pC3RXpYPMJBEjqXvE0VSlAHuuOOOO+74f6Fm6lcHfhcfj3SHGgBgt9t5GzebDX4UG5dUR1HiJgwRAATGJyGAphA3ISlCaQHY5BFSIlSlHgwR8m3bsp81dTAhlBRggLZtL+RTIoy1HC5KmdZg9kOEu66LPqj0UhCxgBEmL4YSAlizn5l8dl8g6gPGoLQvWLwApTGrACkHKIHZBFgCeQABAXxEOeSdMJgdYnnAWNxEHrBklNwMTbYCiQ3RYi2g9NpHLHI77CFfbJyLK4hIki/+cAOkkpg0eZEOHFA3MzdXFHUxWBbn2Rcfz2KjgBTmsICgU5zDCr5Idga0iKDhLIJSteUztO7/yVRY44XkY1UipWpQqtZI/vBew+G9xrbsFaGiqTDAKfSlCqKvr9+t35Gwi2bdXx+eyRpKCJAkjqiqx8vnEGkfUIgcIuQUwEp2QuRN0gBx4i/qukJ/6KPVlkuEXAKQ1jeST822SdxECRFyCKBT5t51HbRtC1X16CX/Z/XL+v6sTvd8238d3JtbhKkCBMmbZS9sdwVwiZuQEmGKAF7ybr3PbDcFiJFHSIgwNg9Ikh9b0HhW9eVC/Fz9Htz3oirLV4zNFcZYAJW8AgCt9Wk8rgMMrfsYfJYAYFtDs+5ZVsC1AA75ATix3gefJUwFewkwDjvJpkiZfURMBDNTpIIjgHcjE5t9qZccTGjdAzDEZ1kAZ/aRvO8UiBIBpEAVILmNnaui44ZDAyQrIFtAKtmJduLk/1NgRoIcTjFLPYAy+6EIwHGAACfSePnA9TsUAbiHG+NekdEfjB4+rtcZgQiQXAajLYB7vm8O8GH/ZDcikZgIHtIutts3AOBZweQlQDH/4/ETAIYiDIQAsAkmSB/2DXe4A4iVxX0iAAR8Q2KmU+DsQ3ILEPUXQRGYM3nYN8H/cDdh1Lht7QG6rgu9209ygKHKULM6BAcQE8nYCrtNSX6cxMX1qL7/JgVwK8ExESikLx3b5Mm8cmdu0XeE3chhlsOpO8XcpfHiAlAQsgaEZ7azjXsRh6MYv02izbq/XAAnE8crJxYhAIAtApLebt+KkDZR5GQoRx0gEs6yjrnY0VhBzPVSx23iL+ZL23BKIf3FAAAAAElFTkSuQmCC";
    }

    if (name == "pamel") {
        document.getElementById("chat-pamel").style = "display: block";
        document.getElementById("friend-pamel").className = "friend select";
        document.getElementById("chatavatar").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxVJREFUeJztWs1uwjAMdqvBlcOelafgWTlw3SS6w2RkXNv5ktZrYfkkNJY4juP4LwlEHR0dHR0dHf8VQwrT4TChtNP0nSIDio8sxvf7l9s3jke6379oHI9Z08MYU5mPx8ci5fc9IU0B3mL3poQUF5B+LeMBt9fEiGykxQAUWkGWcjID5aYKkIFyHI8PZVjtWUrYVAEyHnBW0NkhO1ts7gKW2UcpdG1srgALf5kpUusAvbN7iv6MdAtgc0Z9meOAbsvCTAHRLrVEYrQgkv9vWiz9ppw5huEwtZow83wpF9C7wCacmZO3QBgEp+l74MVavvkOgLLAO+24RpgFIp9d4s+lsd6ZAEU0Xm+mqwDL3DkuWDW77I/SmBxr0UdnAjmO+zQPb7yWgwEHQUtoXbNb7RZKfEpnAkt5loKQdBq6gD7XS8bebntjLWE1vXcU1u1RDSHbLAua0ZmtILQySmDaNbKJ9mUrUPN80ZxVQTAy3dJYLZge79G3BsPFLhAFwRJNFHy0SXumipqwB3S8eXcXITNFLaFBx+i2pxhwu3xG44kIUxTz4UpSfpDxXG5Hn5qjtqxoNWYugCihBVLA0hyn8/VBrwWv4VPiReTEgNP5ajKTEyI0DBagNJ77+S8Lr3dc9ke4XT6LtDMFMGGkeYZFczpfnxaqFy8F0bWC7GPh5Q5aCvRM25LFglkHtB5+PKXpxVs+Kf1b0jJqFi/7SlaSeidINHcJRLkRDbL4mrnCJ6wnwuEw6V3w6Ph77a6hfGostLSuj6izBdH7X80cS+sNdM4UF9CCl/wwApJ5liAtBrT4PoK1b6fSg+DescunsSWo/X3S2ymACC+RiV7QApB3CV1RWu2Ml4oByM7qirLU/2cKaM3p1q6t+cSWpgDPDFF4i1z7uJ6igOiEVsMnOsquZQWpLtBqBdbiLF5rvFyFCuAn8ejG1uv3jqMIP6JnhVm8pBI0T4uHu8awU50APUQnNPQ2iBGdIKOFIfcHktdDPlcSqq+qED6oK9TcTCEKcTcIkmYl1AYu6EJj5Z/0dHR0dHR0dPwf/ABNvLlOCKsf3wAAAABJRU5ErkJggg==";
    }
}

function scrolltotop(){
    document.querySelectorAll('*').forEach(element => {
    if (element.scrollHeight > element.clientHeight) {
        element.scrollTop = 0;
    }
});
}

function downloadfolder(){
    const config = getBooleanConfig();
    if(config.bool2) document.getElementById("downloadzip").style = "display:flex";
    else document.getElementById("downloadzip").style = "display:none";
    if(config.bool3) document.getElementById("downloadshudu").style = "display:flex";
    else document.getElementById("downloadshudu").style = "display:none";
    if(!config.bool3 && !config.bool2) document.getElementById("downloadnone").style = "display:flex";
    else document.getElementById("downloadnone").style = "display:none";
}

function download(num){
    const config = getBooleanConfig();
    document.getElementById('downloadblock').style = "display: flex";
    document.getElementById('blockallblock').style = "display:flex";
    if (num==1){
        if (!config.bool2) {
            document.getElementById('downloading').style = "display: block";
            document.getElementById('downloaddone').style = "display: none";
            setTimeout(function() {
                document.getElementById('downloading').style = "display: none";
                document.getElementById('downloaddone').style = "display: block";
                document.getElementById('downloadwarning').innerText = "下载完毕。";
                updateBooleanConfig('bool2', true)
                downloadfolder();
            }, 2000);
        }
        else {
                document.getElementById('downloading').style = "display: none";
                document.getElementById('downloaddone').style = "display: block";
                document.getElementById('downloadwarning').innerText = "文件已存在。";
            }
    }

    if (num==2){
        if (!config.bool3) {
            document.getElementById('downloading').style = "display: block";
            document.getElementById('downloaddone').style = "display: none";
            setTimeout(function() {
                document.getElementById('downloading').style = "display: none"
                document.getElementById('downloaddone').style = "display: block"
                document.getElementById('downloadwarning').innerText = "下载完毕。";
                updateBooleanConfig('bool3', true);
                downloadfolder();
            }, 2000);
        }
        else {
                document.getElementById('downloading').style = "display: none"
                document.getElementById('downloaddone').style = "display: block"
                document.getElementById('downloadwarning').innerText = "文件已存在。";
            }
    }
}

function closedownload(){
    document.getElementById('downloadblock').style = "display: none";
    document.getElementById('blockallblock').style = "display: none";
}

function clearpassword(num){
    if (num == 1) {
        document.getElementById('zippassword').style = "display: flex";
        document.getElementById('zipcontent').style = "display: none";
    }
    if (num == 2) {
        document.getElementById('zippassword').style = "display: flex";
        document.getElementById('zipcontent').style = "display: none";
    }
}

function validzippassword(num){
    if (num == 1) {
        if (document.getElementById('zippasswordinput').value == ""){
            openwarning2('请输入密码！')
        }
        else if (document.getElementById('zippasswordinput').value == "1706321501"){
            document.getElementById('zippassword').style = "display: none";
            document.getElementById('zipcontent').style = "display: flex";
        }
        else {
            openwarning2('密码错误！')
        }
    }
    if (num == 2) {
        if (document.getElementById('zippasswordinput2').value == ""){
            openwarning2('请输入密码！')
        }
        else if (document.getElementById('zippasswordinput2').value == "311066123NUMAFRONT"){
            document.getElementById('zippassword2').style = "display: none";
            document.getElementById('zipcontent2').style = "display: flex";
        }
        else {
            openwarning2('密码错误！')
        }
    }
}

let playPauseBtn;
let progressBar;
let progressContainer;
let volumeControl;
let currentTimeDisplay;
let durationDisplay;
const audioPlayer = new Audio();

let isPlaying = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

const timeUpdateHandler = function() {
    let currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    
    if (!isNaN(duration)) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = progressPercent + '%';
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    }
};

const endedHandler = function() {
    playPauseBtn.className = "playpausebtn play";
    isPlaying = false;
};

const playPauseHandler = function() {
    if (!audioPlayer.src) {
        console.warn("请先选择音频");
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.className = "playpausebtn play";;
    } else {
        audioPlayer.play()
            .then(() => {
                playPauseBtn.className = "playpausebtn stop";;
            })
            .catch(error => {
                console.error("播放失败:", error);
            });
    }
    isPlaying = !isPlaying;
};

const progressClickHandler = function(e) {
    if (!audioPlayer.src) return;

    const width = this.clientWidth;
    const rect = this.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const duration = audioPlayer.duration;

    
    if (!duration || duration === 0 || isNaN(duration)) return;

    const newTime = (clickX / width) * duration;

    audioPlayer.currentTime = newTime;
};

const volumeChangeHandler = function() {
    audioPlayer.volume = this.value;
};

function exitmusic(){
    audioPlayer.removeEventListener('timeupdate', timeUpdateHandler);
    audioPlayer.removeEventListener('ended', endedHandler);
    if (playPauseBtn) {
        playPauseBtn.removeEventListener('click', playPauseHandler);
    }
    if (progressContainer) {
    }
    if (volumeControl) {
        volumeControl.removeEventListener('input', volumeChangeHandler);
    }
    
    audioPlayer.pause();
    isPlaying = false;
    if (playPauseBtn) {
        playPauseBtn.className = "playpausebtn play";
    }
    audioPlayer.currentTime = 0;
    audioPlayer.src = "";
}

const audioSources = {
    1: "music.mp3",
    2: "testsound.wav"
};

function musicPlayer(num){
    if (num==1) {
        playPauseBtn = document.getElementById('playPauseBtn');
        progressBar = document.getElementById('progressBar');
        progressContainer = document.getElementById('progressContainer');
        volumeControl = document.getElementById('volumeControl');
        currentTimeDisplay = document.getElementById('currentTime');
        durationDisplay = document.getElementById('duration');
    }
    if (num==2) {
        playPauseBtn = document.getElementById('playPauseBtn2');
        progressBar = document.getElementById('progressBar2');
        progressContainer = document.getElementById('progressContainer2');
        volumeControl = document.getElementById('volumeControl2');
        currentTimeDisplay = document.getElementById('currentTime2');
        durationDisplay = document.getElementById('duration2');
    }
    volumeControl.value = 1;
    audioPlayer.volume = 1;
    let sourceNum = num;
    const audioSrc = audioSources[sourceNum];
    if (!audioSrc) {
        console.error("无效的音频编号");
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.className = "playpausebtn play";;
    }
    
    audioPlayer.src = audioSrc;
    progressBar.style.width = "0%";
    currentTimeDisplay.textContent = "0:00";
    durationDisplay.textContent = "0:00";
    
    audioPlayer.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }, { once: true });
    
    console.log(`已切换到音频${sourceNum}`);

    playPauseBtn.addEventListener('click', playPauseHandler);
    audioPlayer.addEventListener('timeupdate', timeUpdateHandler);
    //progressContainer.addEventListener('click', progressClickHandler);
    volumeControl.addEventListener('input', volumeChangeHandler);
    audioPlayer.addEventListener('ended', endedHandler);
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

const display = document.getElementById('calculatordisplay');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value.replace(/\s+/g, '');
        const result = eval(expression);
        display.value = result;
        
        if (expression === '(((((96*89+77)*93-85)+49)*4)*97)-73') {
            specialFunction();
        }
    } catch (error) {
        display.value = 'ERROR';
    }
}

function specialFunction() {
    const config = getBooleanConfig();
    if(!config.bool5 && config.email != "") {
        updateBooleanConfig('bool5', true);
        sendMail(3);
        document.getElementById("calculatorimage").style.display = "flex";
        document.getElementById('blockallblock').style = "display:flex";
    }
    else if (config.bool5) {
        document.getElementById("calculatorimage").style.display = "flex";
        document.getElementById('blockallblock').style = "display:flex";
    }
}

function closecalculatorimage() {
    document.getElementById("calculatorimage").style.display = "none";
    document.getElementById('blockallblock').style = "display:none";
}

function sendMail2(usemail,name,sex) {
    const config = getBooleanConfig();
    if(!config.bool6) {
        updateBooleanConfig('bool6', true);
        let email = usemail;
        
        fetch('服务器域名', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            to: email,
            scenario: 4,
            name: name,
            sex: sex
        })
        })
        .then(res => res.json())
        .then(data => {
        if (data.success) {
            if (data.verificationCode) {
            randomcode = data.verificationCode;
            console.log('Verification code stored:', randomcode);
            }
        } else {
        }
        })
        .catch(err => {
        });
    };
}

let backStack = [];
let forwardStack = [];
let currentPageId = null;


function baopen(num){
    const button1 = document.getElementById("baintroducebutton");
    const button2 = document.getElementById("babussinessbutton");
    const button3 = document.getElementById("bacontactusbutton");
    const content1 = document.getElementById("baintroduce");
    const content2 = document.getElementById("babussiness");
    const content3 = document.getElementById("bacontactus");
    
    scrolltotop();

    if(num == 1 && button1.className != "select"){
        button1.className = "select";
        button2.className = "";
        button3.className = "";

        content1.style.display = "flex";
        content2.style.display = "none";
        content3.style.display = "none";
    }
    if(num == 2 && button2.className != "select"){
        button2.className = "select";
        button1.className = "";
        button3.className = "";
        
        content2.style.display = "flex";
        content1.style.display = "none";
        content3.style.display = "none";
    }
    if(num == 3 && button3.className != "select"){
        button3.className = "select";
        button2.className = "";
        button1.className = "";
        
        content3.style.display = "flex";
        content2.style.display = "none";
        content1.style.display = "none";

        document.getElementById("bacontactcontent").value = "";
        document.getElementById("bacontactname").value = "";
        document.getElementById("bacontactemail").value = "";
        document.getElementById("bacontactsalutation").value = "";
    }
    if(num == 4){
        document.getElementById("bacontactcontent").value = "";
        document.getElementById("bacontactname").value = "";
        document.getElementById("bacontactemail").value = "";
        document.getElementById("bacontactsalutation").value = "";
    }
}

function initbrowser(){
    backStack = [];
    forwardStack = [];
    currentPageId = null;
    document.getElementById("browserAddress").value = "brw.backaperture.aper";
    updateNavButtons();
    document.getElementById("explorerLastPage").onclick = goBack;
    document.getElementById("explorerNextPage").onclick = goForward;
    loadwebsite();

    if (currentPageId == "brw-backaperture-aper") {
        document.getElementById(currentPageId).className = "";
        setTimeout(function() {
            document.getElementById(currentPageId).className = "visible";
        }, 50);
        return;
    }
}


function loadwebsite(){
    const raw = document.getElementById("browserAddress").value;
    const url = raw.replace(/-/g, 'error').replace(/\./g, '-');
    const targetId = url.replace(/^https?:\/\//, '').replace(/^browser?:\/\//, '');

    const targetElem = document.getElementById(targetId);
    const isFavoriteOrNotFound = (targetId === "favorite" || targetId === "pagenotfound");

    if (currentPageId == targetId) {
        document.getElementById(currentPageId).className = "";
        setTimeout(function() {
            document.getElementById(currentPageId).className = "visible";
        }, 50);
        if (targetId === "brw-backaperture-aper") {
            baopen(1);
        }
        if (targetId === "brw-entitytest-aper") {
            cleartest();
        }
        return;
    }

    if (targetElem || isFavoriteOrNotFound) {
        if (currentPageId && currentPageId !== targetId) {
            backStack.push(currentPageId);
            forwardStack = [];
        }

        const visibleEls = document.querySelectorAll('#browsermaincontents > .visible');
        visibleEls.forEach(el => el.className = "");

        if (targetElem) {
            targetElem.className = "visible";
        } else {
            document.getElementById(targetId).className = "visible";
        }

        if (isFavoriteOrNotFound) {
            document.getElementById("browserAddress").value = "browser://" + targetId;
        } else if (!raw.startsWith('http://')) {
            document.getElementById("browserAddress").value = "http://" + raw.replace(/^https?:\/\//, '');
        }

        afuncforbrowser(targetId)

        currentPageId = targetId;
    } else {
        const visibleEls = document.querySelectorAll('#browsermaincontents > .visible');
        visibleEls.forEach(el => el.className = "");
        document.getElementById("pagenotfound").className = "visible";
        currentPageId = "pagenotfound";
    }

    updateNavButtons();
}

function goBack(){
    if (backStack.length === 0) return;
    if (currentPageId) {
        forwardStack.push(currentPageId);
    }
    const prevId = backStack.pop();

    const visibleEls = document.querySelectorAll('#browsermaincontents > .visible');
    visibleEls.forEach(el => el.className = "");
    document.getElementById(prevId).className = "visible";

    if (prevId === "favorite" || prevId === "pagenotfound") {
        document.getElementById("browserAddress").value = "browser://" + prevId;
    } else {
        document.getElementById("browserAddress").value = "http://" + prevId.replace(/-/g, '.');
    }

    afuncforbrowser(prevId)

    currentPageId = prevId;
    updateNavButtons();
}

function goForward(){
    if (forwardStack.length === 0) return;
    if (currentPageId) {
        backStack.push(currentPageId);
    }
    const nextId = forwardStack.pop();

    const visibleEls = document.querySelectorAll('#browsermaincontents > .visible');
    visibleEls.forEach(el => el.className = "");
    document.getElementById(nextId).className = "visible";

    if (nextId === "favorite" || nextId === "pagenotfound") {
        document.getElementById("browserAddress").value = "browser://" + nextId;
    } else {
        document.getElementById("browserAddress").value = "http://" + nextId.replace(/-/g, '.');
    }

    afuncforbrowser(nextId);

    currentPageId = nextId;
    updateNavButtons();
}

function updateNavButtons(){
    const backBtn = document.getElementById("explorerLastPage");
    const forwardBtn = document.getElementById("explorerNextPage");

    if (backStack.length > 0) {
        backBtn.classList.remove("disable");
    } else {
        backBtn.classList.add("disable");
    }

    if (forwardStack.length > 0) {
        forwardBtn.classList.remove("disable");
    } else {
        forwardBtn.classList.add("disable");
    }
}

function afuncforbrowser(id){
    if (id === "brw-backaperture-aper") {
        baopen(1);
    }
    if (id === "brw-entitytest-aper") {
        cleartest();
    }
    if(id == "brw-boredbutton-aper"){
        document.getElementById("boredbuttoncontent").innerHTML = "";
    }
}


function browserrefresh(){
    const visibleEls = document.querySelectorAll('#browsermaincontents > .visible');
    visibleEls.forEach(element => {
        if (element.id) {
            const id = element.id;
            if (id === "favorite" || id === "pagenotfound")document.getElementById("browserAddress").value = "browser://" + id.replace(/-/g, '.');
            else document.getElementById("browserAddress").value = "http://" + id.replace(/-/g, '.');
            const allVis = document.querySelectorAll('#browsermaincontents > .visible');
            allVis.forEach(el => el.className = "");
            element.className = "";
            setTimeout(function() {
                element.className = "visible";
            }, 50);

            afuncforbrowser(id);
        }
    });
}

function sendmessagetoba(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (document.getElementById('bacontactname').value == ""){
        sendmessagebawarning("请输入姓名！");
    }
    else if (document.getElementById('bacontactsalutation').value == ""){
        sendmessagebawarning("请输入称谓！");
    }
    else if (!regex.test(document.getElementById('bacontactemail').value)) {
        sendmessagebawarning('请输入有效的邮箱格式，如：example@xxx.email');
    }
    else if (document.getElementById('bacontactcontent').value == ""){
        sendmessagebawarning("请输入内容！");
    }
    else {
        if (document.getElementById('bacontactcontent').value.includes("S2cW4lkBzkRZRpwu5JPB7xsoxa3PGeJR")){
            sendMail2(document.getElementById('bacontactemail').value,document.getElementById('bacontactname').value,document.getElementById('bacontactsalutation').value)
        }
        sendmessagebawarning("发送成功！");
        baopen(4);
    }
    
}

function sendmessagebawarning(content){
    document.getElementById('bawarning').style.display = 'flex';
    document.getElementById('bawarningcontent').innerHTML = content;
}

function topage(url){
    document.getElementById("browserAddress").value = "http://" + url.replace(/-/g, '.');
    loadwebsite();
}

function tofavorite(){
    document.getElementById("browserAddress").value = "favorite";
    loadwebsite();
    browserrefresh();
    const config = getBooleanConfig();
    document.getElementById("favoritepages").innerHTML = config.favoriteurl;
}

function addfavorite(){
    const name = document.getElementById("favoritename").value;
    const url = document.getElementById("favoriteurl").value;

    if (url == "") {
        document.getElementById("favoritewarning").style.display = "flex";
        document.getElementById("favoritecontent").innerHTML = "请输入网址！";
    }
    else if (!url.includes('.aper') || !url.includes('http://brw.') || url.includes(' ')) {
        document.getElementById("favoritewarning").style.display = "flex";
        document.getElementById("favoritecontent").innerHTML = "请输入正确网址！（http://brw.xxxxxxxxx.aper，且不能有空格）";
    }
    else {
        document.getElementById("favoritepages").innerHTML += `<div class="favoritepage" onclick="topage('${url.replace(/\./g, '-').replace(/^https?:\/\//, '')}')">
                                <div>
                                    <span class="name">${name}</span>
                                    <span class="url">${url}</span>
                                </div>
                                <span onclick="event.stopPropagation(); this.parentElement.remove(),savefavorite()"></span>
                            </div>`;
        savefavorite();
        document.getElementById('addfavorite').style.display = 'none';
        clearAllInputs();
    }
}

function savefavorite(){
        updateBooleanConfig('favoriteurl', document.getElementById("favoritepages").innerHTML);
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;
    let firstUnanswered = null;
    
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const radioName = `q${questionNumber}`;
        const selectedOption = document.querySelector(`input[name="${radioName}"]:checked`);
        
        if (!selectedOption) {
            allAnswered = false;
            question.classList.add('unanswered');
            
            if (!firstUnanswered) {
                firstUnanswered = question;
            }
            
            if (!question.querySelector('.error-message')) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = '请选择一个选项';
                question.appendChild(errorMsg);
            }
        } else {
            question.classList.remove('unanswered');
            const existingError = question.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }
    });
    
    if (allAnswered) {
        calculateResult();
    } else if (firstUnanswered) {
        requestAnimationFrame(() => {
            firstUnanswered.scrollIntoView({
                behavior: 'auto',
                block: 'center'
            });
            
            setTimeout(() => {
                firstUnanswered.scrollIntoView({
                    behavior: 'auto',
                    block: 'center'
                });
            }, 100);
        });
    }
});

function calculateResult() {
    const resultText = "这里是你的测试结果...";
    const selectedOption = document.querySelector('input[name="q18"]:checked')
    const result2 = document.getElementById('result2');
    
    document.getElementById('result').innerHTML = resultText;
    if (selectedOption.value == "A") result2.innerHTML = "肢团";
    if (selectedOption.value == "B") result2.innerHTML = "猎犬";
    if (selectedOption.value == "C") result2.innerHTML = "窃皮者";
    if (selectedOption.value == "D") result2.innerHTML = "悲尸";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
}

function cleartest(){
    clearAllInputs();
    const questions = document.querySelectorAll('#brw-entitytest-aper .question');

    questions.forEach(question => {
        question.classList.remove('unanswered');
        
        const errorMessages = question.querySelectorAll('.error-message');
        errorMessages.forEach(errorMsg => errorMsg.remove());
    });
}

let tempclick = 0;
let boolclick = false;
function downloadzip2(){
    const config = getBooleanConfig();
    if (!config.bool2) {
        if (!boolclick){
            boolclick = true;
            setTimeout(function() {
                boolclick = false;
                tempclick = 0;
            }, 2000);
        }
        else if (tempclick >= 10){
            download(1);
            boolclick = false;
            tempclick = 0;
        }
        else {
            tempclick ++;
        }
    }
}

const randomwebs = [
    "brw-blsafwlglls-aper",
    "brw-theendofinternet-aper",
    "brw-deepwhale-aper",
    "brw-entitytest-aper",
    "brw-dogintroduce-aper",
    "brw-boredbutton-aper",
    "brw-luckymondrestaurant-aper"
]

function randompage(){
    document.getElementById("browserAddress").value = "http://" + randomwebs[Math.floor(betterRandom() * randomwebs.length)].replace(/-/g, '.');
    loadwebsite();
}

const randomideas = [
    "用袜子当手套，坚持30秒。",
    "倒立过来尝试浏览网页10秒。",
    "假装自己是一台复印机，发出“嗡嗡”声并重复别人说的话。",
    "用嘴型无声地唱一句歌词，让别人猜是什么歌。",
    "把身边最近的三个物品编成一个冷笑话。",
    "用非惯用手画一只动物。",
    "对着电风扇“啊——”然后听颤音。",
    "深呼吸三次，每次呼气时假装吹灭生日蜡烛。",
    "闭眼摸一个东西，猜它的材质和颜色再睁眼验证。",
    "用指尖在桌上假装弹一首歌，看谁能猜出来。",
    "把双手握拳放在眼睛前当望远镜，观察周围10秒。",
    "找一个人一起嘴里含口水对视，直到一方将水喷出来为止。",
    "想象自己是一颗土豆，写下今天的“土豆日记”。",
    "给房间里的物品开一场“选美大赛”。",
    "用“如果___（物品）是一首歌，它会是什么风格？”造句。",
    "把今天的心情比喻成一种食物并解释原因。",
    "原地转三圈然后走直线。",
    "对下一个和你说话的人用“喵”代替“嗯”回应。",
    "在纸上画一个软盘，然后假装把纸塞进抽屉“存档”。",
    "用打字机打一句“HELLO WORLD”，然后撕下来贴墙上。",
    "把易拉罐拉环抠下来当戒指。",
    "用锡纸包住头，说“我在防读心术”。",
    "把计算器当“微型电脑”，假装编程（按一堆乱七八糟的数字）。"
]

function getrandomidea(){
    document.getElementById("boredbuttoncontent").innerHTML = randomideas[Math.floor(betterRandom() * randomideas.length)];
}