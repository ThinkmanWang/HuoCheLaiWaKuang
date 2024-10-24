var params = {
    linkAndroid		: {
        value			: "https://play.google.com/store/apps/details?id=games.flexus.trainminer",
        type			: 'string',
        default			: '',
        description		: ''
    },

    linkIOS		: {
        value			: "https://apps.apple.com/app/train-miner-idle-railway-game/id6472662399",
        type			: 'string',
        default			: '',
        description		: ''
    },

    //-

    //colorBtnInstall 	: {
    //	value			: '0xfff000',
    //	type			: 'string',
    //	default			: '0xfff000',
    //	description		: ''
    //},

    //-

    language		: {
        value			: "auto",
        type			: 'string',
        default			: "auto",
        description		: ''
    },

    //-

    modeClicks			: {value:0,type:'number',default:0,description:''},
    fullscreenCta		: {value:true,type:'boolean',default:true,description:''},
    playSounds			: {value:true,type:'boolean',default:true,description:''},

};

var texts = {
    "en" : {
        //textInstall		: 'DOWNLOAD',

    }
};

let adPlatform = {value:'mintegral',type:'string',description:''};