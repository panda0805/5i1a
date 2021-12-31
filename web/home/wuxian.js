var _BasicIncome = 0;
var _SocialBase = 0;
var _FundBase = 0;

var _P_Pension_Percent = 8;
var _U_Pension_Percent = 20;

var _P_Medical_Percent = 2;
var _U_Medical_Percent = 11;

var _P_LoseJob_Percent = 0.5;
var _U_LoseJob_Percent = 1.5;

var _U_Injury_Percent = 0.5;
var _U_Birth_Percent = 1;

var _P_HouseFund_Pencent = 7;
var _U_HouseFund_Pencent = 7;

var _P_AddHouseFund_Pencent = 0;
var _U_AddHouseFund_Pencent = 0;

$(document).ready(function() {
    $("#txtBasicIncome").focus();

    $("#txtP_Pension_Percent").val(_P_Pension_Percent);
    $("#txtU_Pension_Percent").val(_U_Pension_Percent);

    $("#txtP_Medical_Percent").val(_P_Medical_Percent);
    $("#txtU_Medical_Percent").val(_U_Medical_Percent);

    $("#txtP_LoseJob_Percent").val(_P_LoseJob_Percent);
    $("#txtU_LoseJob_Percent").val(_U_LoseJob_Percent);

    $("#txtU_Injury_Percent").val(_U_Injury_Percent);

    $("#txtU_Birth_Percent").val(_U_Birth_Percent);

    $("#txtP_HouseFund_Pencent").val(_P_HouseFund_Pencent);
    $("#txtU_HouseFund_Pencent").val(_U_HouseFund_Pencent);

    $("#txtP_AddHouseFund_Pencent").val(_P_AddHouseFund_Pencent);
    $("#txtU_AddHouseFund_Pencent").val(_U_AddHouseFund_Pencent);
});

function clearMessages() {
    $("#lblMsgBasicIncome")[0].innerHTML = "";
    $("#lblMsgSocialBase")[0].innerHTML = "";
    $("#lblMsgFundBase")[0].innerHTML = "";
}

function chbSocialBase_onClick() {
    clearMessages();
    var txtObj = document.getElementById("txtSocialBase");
    if (document.getElementById("chbSocialBase").checked) {
        txtObj.readOnly = "";
        txtObj.style.backgroundColor = "#ffffff";
        txtObj.focus();
    } else {
        txtObj.readOnly = "readonly";
        txtObj.style.backgroundColor = "lightgray";
    }
    var txtObjBasicIncome = document.getElementById("txtBasicIncome");
    if (document.getElementById("chbSocialBase").checked && document.getElementById("chbFundBase").checked) {
        txtObjBasicIncome.readOnly = "readonly";
        txtObjBasicIncome.style.backgroundColor = "lightgray";
    } else {
        txtObjBasicIncome.readOnly = "";
        txtObjBasicIncome.style.backgroundColor = "#ffffff";
    }
}

function chbFundBase_onClick() {
    clearMessages();
    var txtObj = document.getElementById("txtFundBase");
    if (document.getElementById("chbFundBase").checked) {
        txtObj.readOnly = "";
        txtObj.style.backgroundColor = "#ffffff";
        txtObj.focus();
    } else {
        txtObj.readOnly = "readonly";
        txtObj.style.backgroundColor = "lightgray";
    }

    var txtObjBasicIncome = document.getElementById("txtBasicIncome");
    if (document.getElementById("chbSocialBase").checked && document.getElementById("chbFundBase").checked) {
        txtObjBasicIncome.readOnly = "readonly";
        txtObjBasicIncome.style.backgroundColor = "lightgray";
    } else {
        txtObjBasicIncome.readOnly = "";
        txtObjBasicIncome.style.backgroundColor = "#ffffff";
    }
}

function btnReset_onClick() {
    clearMessages();

    var txtObj = document.getElementById("txtSocialBase");
    txtObj.readOnly = "readonly";
    txtObj.style.backgroundColor = "lightgray";

    txtObj = document.getElementById("txtFundBase");
    txtObj.readOnly = "readonly";
    txtObj.style.backgroundColor = "lightgray";

    txtObj = document.getElementById("txtBasicIncome");
    txtObj.readOnly = "";
    txtObj.style.backgroundColor = "#ffffff";

    $("#chbSocialBase").prop("checked", false);
    $("#chbFundBase").prop("checked", false);

    $("#txtSocialBase").val("");
    $("#txtFundBase").val("");


    $("#txtP_Pension_Percent").val("");
    $("#lblP_Pension")[0].innerHTML = "";
    $("#txtU_Pension_Percent").val("");
    $("#lblU_Pension")[0].innerHTML = "";

    $("#txtP_Medical_Percent").val("");
    $("#lblP_Medical")[0].innerHTML = "";
    $("#txtU_Medical_Percent").val("");
    $("#lblU_Medical")[0].innerHTML = "";

    $("#txtP_LoseJob_Percent").val("");
    $("#lblP_LoseJob")[0].innerHTML = "";
    $("#txtU_LoseJob_Percent").val("");
    $("#lblU_LoseJob")[0].innerHTML = "";

    $("#txtU_Injury_Percent").val("");
    $("#lblU_Injury")[0].innerHTML = "";

    $("#txtU_Birth_Percent").val("");
    $("#lblU_Birth")[0].innerHTML = "";

    $("#txtP_HouseFund_Pencent").val("");
    $("#lblP_HouseFund")[0].innerHTML = "";
    $("#txtU_HouseFund_Pencent").val("");
    $("#lblU_HouseFund")[0].innerHTML = "";

    $("#txtP_AddHouseFund_Pencent").val("");
    $("#lblP_AddHouseFund")[0].innerHTML = "";
    $("#txtU_AddHouseFund_Pencent").val("");
    $("#lblU_AddHouseFund")[0].innerHTML = "";

    $("#txtP_Pension_Percent").val(_P_Pension_Percent);
    $("#txtU_Pension_Percent").val(_U_Pension_Percent);

    $("#txtP_Medical_Percent").val(_P_Medical_Percent);
    $("#txtU_Medical_Percent").val(_U_Medical_Percent);

    $("#txtP_LoseJob_Percent").val(_P_LoseJob_Percent);
    $("#txtU_LoseJob_Percent").val(_U_LoseJob_Percent);

    $("#txtU_Injury_Percent").val(_U_Injury_Percent);

    $("#txtU_Birth_Percent").val(_U_Birth_Percent);

    $("#txtP_HouseFund_Pencent").val(_P_HouseFund_Pencent);
    $("#txtU_HouseFund_Pencent").val(_U_HouseFund_Pencent);

    $("#txtP_AddHouseFund_Pencent").val(_P_AddHouseFund_Pencent);
    $("#txtU_AddHouseFund_Pencent").val(_U_AddHouseFund_Pencent);

    $("#lblP_Total")[0].innerHTML = "";
    $("#lblU_Total")[0].innerHTML = "";


    $("#txtBasicIncome").val("");
    $("#txtBasicIncome").focus();
}

function btnCalc_onClick() {
    var pTotal = 0,
        uTotal = 0;
    clearMessages();

    _BasicIncome = 0;
    _SocialBase = 0;
    _FundBase = 0;

    if (!document.getElementById("txtBasicIncome").readOnly) {
        var basicIncome = getTextBoxValue("txtBasicIncome");
        if (basicIncome < 0) { zyyAlert("输入不合法", "txtBasicIncome", "lblMsgBasicIncome", basicIncome); return; }
        _BasicIncome = basicIncome;
    }
    if (!document.getElementById("txtSocialBase").readOnly) {
        var socialBase = getTextBoxValue("txtSocialBase");
        if (socialBase < 0) { zyyAlert("输入不合法", "txtSocialBase", "lblMsgSocialBase", socialBase); return; }
        _SocialBase = socialBase;
    }
    if (!document.getElementById("txtFundBase").readOnly) {
        var fundBase = getTextBoxValue("txtFundBase");
        if (fundBase < 0) { zyyAlert("输入不合法", "txtFundBase", "lblMsgFundBase", fundBase); return; }
        _FundBase = fundBase;
    }

    if (_SocialBase == 0) _SocialBase = _BasicIncome;
    if (_FundBase == 0) _FundBase = _BasicIncome;

    var p_Pension_Percent = getInputTextValue("txtP_Pension_Percent");
    var p_Pension = _SocialBase * p_Pension_Percent * 0.01;
    $("#lblP_Pension")[0].innerHTML = fc(p_Pension) + " 元";
    pTotal = pTotal + p_Pension;

    var u_Pension_Percent = getInputTextValue("txtU_Pension_Percent");
    var u_Pension = _SocialBase * u_Pension_Percent * 0.01;
    $("#lblU_Pension")[0].innerHTML = fc(u_Pension) + " 元";
    uTotal = uTotal + u_Pension;

    var p_Medical_Percent = getInputTextValue("txtP_Medical_Percent");
    var p_Medical = _SocialBase * p_Medical_Percent * 0.01;
    $("#lblP_Medical")[0].innerHTML = fc(p_Medical) + " 元";
    pTotal = pTotal + p_Medical;

    var u_Medical_Percent = getInputTextValue("txtU_Medical_Percent");
    var u_Medical = _SocialBase * u_Medical_Percent * 0.01;
    $("#lblU_Medical")[0].innerHTML = fc(u_Medical) + " 元";
    uTotal = uTotal + u_Medical;

    var p_LoseJob_Percent = getInputTextValue("txtP_LoseJob_Percent");
    var p_LoseJob = _SocialBase * p_LoseJob_Percent * 0.01;
    $("#lblP_LoseJob")[0].innerHTML = fc(p_LoseJob) + " 元";
    pTotal = pTotal + p_LoseJob;

    var u_LoseJob_Percent = getInputTextValue("txtU_LoseJob_Percent");
    var u_LoseJob = _SocialBase * u_LoseJob_Percent * 0.01;
    $("#lblU_LoseJob")[0].innerHTML = fc(u_LoseJob) + " 元";
    uTotal = uTotal + u_LoseJob;

    var u_Injury_Percent = getInputTextValue("txtU_Injury_Percent");
    var u_Injury = _SocialBase * u_Injury_Percent * 0.01;
    $("#lblU_Injury")[0].innerHTML = fc(u_Injury) + " 元";
    uTotal = uTotal + u_Injury;

    var u_Birth_Percent = getInputTextValue("txtU_Birth_Percent");
    var u_Birth = _SocialBase * u_Birth_Percent * 0.01;
    $("#lblU_Birth")[0].innerHTML = fc(u_Birth) + " 元";
    uTotal = uTotal + u_Birth;


    var p_HouseFund_Pencent = getInputTextValue("txtP_HouseFund_Pencent");
    var p_HouseFund = _FundBase * p_HouseFund_Pencent * 0.01;
    $("#lblP_HouseFund")[0].innerHTML = fc(p_HouseFund) + " 元";
    pTotal = pTotal + p_HouseFund;

    var u_HouseFund_Pencent = getInputTextValue("txtU_HouseFund_Pencent");
    var u_HouseFund = _FundBase * u_HouseFund_Pencent * 0.01;
    $("#lblU_HouseFund")[0].innerHTML = fc(u_HouseFund) + " 元";
    uTotal = uTotal + u_HouseFund;

    var p_AddHouseFund_Pencent = getInputTextValue("txtP_AddHouseFund_Pencent");
    var p_AddHouseFund = _FundBase * p_AddHouseFund_Pencent * 0.01;
    $("#lblP_AddHouseFund")[0].innerHTML = fc(p_AddHouseFund) + " 元";
    pTotal = pTotal + p_AddHouseFund;

    var u_AddHouseFund_Pencent = getInputTextValue("txtU_AddHouseFund_Pencent");
    var u_AddHouseFund = _FundBase * u_AddHouseFund_Pencent * 0.01;
    $("#lblU_AddHouseFund")[0].innerHTML = fc(u_AddHouseFund) + " 元";
    uTotal = uTotal + u_AddHouseFund;

    $("#lblP_Total")[0].innerHTML = fc(pTotal) + " 元";
    $("#lblU_Total")[0].innerHTML = fc(uTotal) + " 元";
}

function getInputTextValue(textBoxID) {
    var textBox = document.getElementById(textBoxID);
    var strIncome = textBox.value;

    if (JTrim(strIncome) == "") {
        textBox.value = "0";
        return 0;
    }
    income = parseFloat(strIncome);
    if (isNaN(income)) {
        textBox.value = "0";
        return 0
    }

    if (income < 0) {
        textBox.value = "0";
        return 0;
    }
    return income;
}

function getInsureValue() {
    var result = 0;
    var textBox = document.getElementById("txtInsure");
    var strIncome = textBox.value;

    if (JTrim(strIncome) == "") {
        textBox.value = 0;
        return 0;
    }
    strIncome = strIncome.replace(",", "");
    income = parseFloat(strIncome);
    if (isNaN(income)) {
        return -2;
    }

    if (income < 0) {
        return -3;
    }
    return income;
}


function getTextBoxValue(textBoxID) {

    var result = 0;
    var textBox = document.getElementById(textBoxID);
    var strIncome = textBox.value;

    if (JTrim(strIncome) == "") {
        return -1;
    }
    strIncome = strIncome.replace(",", "");

    income = parseFloat(strIncome);
    if (isNaN(income)) {
        return -2;
    }

    if (income < 0) {
        return -3;
    }
    return income;
}


function zyyAlert(section, textBoxID, lblMsgID, id) {
    var lblMsg = document.getElementById(lblMsgID);
    if (id == -1) lblMsg.innerHTML = section + " !";
    else if (id == -2) lblMsg.innerHTML = section + " !";
    else if (id == -3) lblMsg.innerHTML = section + " !";

    var textBox = document.getElementById(textBoxID);
    textBox.focus();
    textBox.select();
}

function enterToCalc(evt) {
    evt = (evt) ? evt : ((window.event) ? window.event : "")
    var key = evt.keyCode ? evt.keyCode : evt.which;
    if (key == 13) {
        $("#btnCalc").click();
        return false;
    }
}

function selCalcType_onchange() {
    if (document.all.selCalcType.value == 0) {
        location = location.href;
        return;
    }
    location = document.all.selCalcType.value;
}

function JTrim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}



function fc(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
        num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

function initRateTableColor(lineName, rowsCount) {
    for (var i = 1; i <= rowsCount; i++) {
        var obj = document.getElementById(lineName + i);
        obj.style.color = "black";
        obj.style.backgroundColor = "white";
    }
}

function setRateTableSelectedColor(lineName, rowsCount, index) {
    initRateTableColor(lineName, rowsCount)
    if (index == 0) return;
    var obj = document.getElementById(lineName + index);
    obj.style.color = "blue";
    obj.style.backgroundColor = "lightgray";
}