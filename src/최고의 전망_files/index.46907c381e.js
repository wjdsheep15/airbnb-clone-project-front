__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.autologinEnabled=function(){return!(0,n.default)('nofbautologin')};var n=t(r(d[1]))}),"1ec62e",["ba7a76","1f339e"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if(!(0,f.getFacebookBootstrapData)())return;b()};var o=t(r(d[1])),n=t(r(d[2])),s=r(d[3]),c=r(d[4]),u=r(d[5]),f=r(d[6]),l=r(d[7]),p=t(r(d[8]));function b(){const t=p.default.getBootstrap('show_facebook_prompt_force'),f=!n.default.isLoggedIn()&&(0,c.autologinEnabled)()&&!(0,u.hasDismissedFacebookPrompt)();(t||f)&&Object.assign((0,s.normalizeLoader)((()=>r(d[10])(d[9]).then(o.default))),{prefetch:()=>r(d[10]).prefetch(d[9])})().then((t=>l.scheduler.postTask(t,{priority:'background'})))}}),"541692",["ba7a76","45f788","06a99e","09d809","1ec62e","6633c2","f08ba7","a2c93f","c235f8","33f027","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RoutePaths=e.Pathnames=e.FORGOT_PASSWORD_UI_URL=e.FORGOT_PASSWORD_API_URL=void 0;const _={LOGIN:'/login',SIGNUP:'/signup_login',LOGIN_WITH_REDIRECT:'/login_with_redirect',SOCIAL_SIGNUP:'/social_signup',SET_PASSWORD_UI:'/users/set_password',SET_PASSWORD_API:'/users/set_password_api'};e.Pathnames=_;e.FORGOT_PASSWORD_API_URL='/forgot_password_api';const s='/forgot_password';e.FORGOT_PASSWORD_UI_URL=s;const o={LOGIN:'/login/:glob*',SIGNUP:'/signup_login/:glob*',LOGIN_WITH_REDIRECT:'/login_with_redirect/:glob*',SOCIAL_SIGNUP:'/social_signup/:glob*',PASSWORDLESS_LOGIN:'/users/passwordless_login/:glob*',FORGOT_PASSWORD:`${s}/:glob*`,SET_PASSWORD:`${_.SET_PASSWORD_UI}/:glob*`};e.RoutePaths=o}),"6126d0",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var o=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_FACEBOOK_PROMPT_SHOW=void 0,e.disableFacebookAutologin=function(){(0,t.default)('nofbautologin',!0)},e.getFacebookPromptShowCount=void 0,e.hasDismissedFacebookPrompt=function(){if(window.location.pathname.startsWith('/rooms'))return!!(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED_P3);return!!(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED)},e.setFacebookPromptShowCount=function(){const o=s()||0;(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_SHOW_COUNT,o+1)},e.setHideFacebookPrompt=function(){window.location.pathname.startsWith('/rooms')&&(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED_P3,!0,{expires:n});(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED,!0,{expires:n})};var t=o(r(d[1])),O=r(d[2]);const n=6048e5;e.MAX_FACEBOOK_PROMPT_SHOW=2;const s=()=>(0,t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_SHOW_COUNT);e.getFacebookPromptShowCount=s}),"6633c2",["ba7a76","1f339e","b616d2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={StrengthIndicatorStatuses:!0,IsValidIndicatorStatuses:!0,TOSGroups:!0,Modals:!0,AuthMethods:!0,Boxes:!0,LoginMethods:!0,LoginMethodNames:!0,LoginMethodToName:!0,LoginMethodsForLogging:!0,SignupMethods:!0,SignupMethodsForLogging:!0,SignupPaneViews:!0,SignupPaneViewsForLogging:!0,SignupFormSteps:!0,MowebEmailViews:!0,FormNamesForIDs:!0,LoginMethodToFormNameForIDs:!0,ModalTypes:!0,Panes:!0,Platforms:!0,AuthModalLifecycleStages:!0,AuthBoxLifecycleStages:!0,Providers:!0,NonPopupProviders:!0,ContextualLoginMethods:!0,SuggestedLoginMethods:!0,SuggestedLoginMethodLabels:!0,SuggestedLoginViews:!0,SocialAuthMethods:!0,SocialAuthSource:!0,LoginPaneViews:!0,CombineAuthPaneViews:!0,CombineAuthPaneViewToMethods:!0,LocalStorageKeys:!0,BirthdateValidationStates:!0,PhoneSignupErrorStatuses:!0,SwitchModalSource:!0,AuthPagePaths:!0,DEFAULT_DELAY_SECONDS:!0};e.TOSGroups=e.SwitchModalSource=e.SuggestedLoginViews=e.SuggestedLoginMethods=e.SuggestedLoginMethodLabels=e.StrengthIndicatorStatuses=e.SocialAuthSource=e.SocialAuthMethods=e.SignupPaneViewsForLogging=e.SignupPaneViews=e.SignupMethodsForLogging=e.SignupMethods=e.SignupFormSteps=e.Providers=e.Platforms=e.PhoneSignupErrorStatuses=e.Panes=e.NonPopupProviders=e.MowebEmailViews=e.Modals=e.ModalTypes=e.LoginPaneViews=e.LoginMethodsForLogging=e.LoginMethods=e.LoginMethodToName=e.LoginMethodToFormNameForIDs=e.LoginMethodNames=e.LocalStorageKeys=e.IsValidIndicatorStatuses=e.FormNamesForIDs=e.DEFAULT_DELAY_SECONDS=e.ContextualLoginMethods=e.CombineAuthPaneViews=e.CombineAuthPaneViewToMethods=e.Boxes=e.BirthdateValidationStates=e.AuthPagePaths=e.AuthModalLifecycleStages=e.AuthMethods=e.AuthBoxLifecycleStages=void 0;var _=r(d[0]);let O,n,t,N,I;Object.keys(_).forEach((function(O){"default"!==O&&"__esModule"!==O&&(Object.prototype.hasOwnProperty.call(o,O)||O in e&&e[O]===_[O]||Object.defineProperty(e,O,{enumerable:!0,get:function(){return _[O]}}))})),e.StrengthIndicatorStatuses=O,(function(o){o.weak="weak",o.good="good",o.strong="strong"})(O||(e.StrengthIndicatorStatuses=O={})),e.IsValidIndicatorStatuses=n,(function(o){o.invalid="invalid",o.valid="valid"})(n||(e.IsValidIndicatorStatuses=n={})),e.TOSGroups=t,(function(o){o.WITH_CHECKBOX="with-checkbox",o.NO_CHECKBOX="no-checkbox",o.WITH_LAST_STEP="with-last-step"})(t||(e.TOSGroups=t={})),e.Modals=N,(function(o){o.LOGIN_MODAL="LOGIN_MODAL",o.SIGNUP_MODAL="SIGNUP_MODAL",o.FORGOT_PASSWORD_MODAL="FORGOT_PASSWORD_MODAL",o.SSO_MODAL="SSO_MODAL",o.LOGOUT_MODAL="LOGOUT_MODAL",o.NO_MODAL="NO_MODAL"})(N||(e.Modals=N={})),e.AuthMethods=I,(function(o){o.PHONE="phone",o.OTP_PHONE="otp_phone",o.EMAIL="email",o.PHONE_OR_EMAIL="phone_or_email"})(I||(e.AuthMethods=I={}));let E,P;e.Boxes={LOGIN_BOX:'LOGIN_BOX',SIGNUP_BOX:'SIGNUP_BOX',COMBINE_AUTH_BOX:'COMBINE_AUTH_BOX',COMBINE_OTP_PHONE_BOX:'COMBINE_OTP_PHONE_BOX',FORGOT_PASSWORD_BOX:'FORGOT_PASSWORD_BOX'},e.LoginMethods=E,(function(o){o.EMAIL_LOGIN="EMAIL_LOGIN",o.OTP_PHONE_LOGIN="OTP_PHONE_LOGIN",o.PHONE_LOGIN="PHONE_LOGIN",o.PHONE_OR_EMAIL_LOGIN="PHONE_OR_EMAIL_LOGIN"})(E||(e.LoginMethods=E={})),e.LoginMethodNames=P,(function(o){o.EMAIL_LOGIN="email_login",o.OTP_PHONE_LOGIN="otp_phone_login",o.PHONE_LOGIN="phone_login",o.PHONE_OR_EMAIL_LOGIN="phone_or_email_login",o.OTP_PHONE_LOGIN_PHONE="otp_phone_login_phone"})(P||(e.LoginMethodNames=P={}));const L={[E.EMAIL_LOGIN]:P.EMAIL_LOGIN,[E.OTP_PHONE_LOGIN]:P.OTP_PHONE_LOGIN,[E.PHONE_LOGIN]:P.PHONE_LOGIN,[E.PHONE_OR_EMAIL_LOGIN]:P.PHONE_OR_EMAIL_LOGIN};let s,S,A,M;e.LoginMethodToName=L,e.LoginMethodsForLogging=s,(function(o){o[o.EMAIL_LOGIN=I.EMAIL]="EMAIL_LOGIN",o[o.OTP_PHONE_LOGIN=I.OTP_PHONE]="OTP_PHONE_LOGIN",o[o.PHONE_LOGIN=I.PHONE]="PHONE_LOGIN",o[o.PHONE_OR_EMAIL_LOGIN=I.PHONE_OR_EMAIL]="PHONE_OR_EMAIL_LOGIN"})(s||(e.LoginMethodsForLogging=s={})),e.SignupMethods=S,(function(o){o.PHONE_SIGNUP="PHONE_SIGNUP",o.EMAIL_SIGNUP="EMAIL_SIGNUP",o.MOWEB_EMAIL_SIGNUP="MOWEB_EMAIL_SIGNUP",o.SOCIAL_SIGNUP="SOCIAL_SIGNUP"})(S||(e.SignupMethods=S={})),e.SignupMethodsForLogging=A,(function(o){o[o.PHONE_SIGNUP=I.PHONE]="PHONE_SIGNUP",o[o.EMAIL_SIGNUP=I.EMAIL]="EMAIL_SIGNUP"})(A||(e.SignupMethodsForLogging=A={})),e.SignupPaneViews=M,(function(o){o.ALL_SIGNUP_OPTIONS="ALL_SIGNUP_OPTIONS",o.EMAIL_SIGNUP="EMAIL_SIGNUP",o.MOWEB_EMAIL_SIGNUP="MOWEB_EMAIL_SIGNUP",o.OTP_PHONE_MORE_OPTIONS="OTP_PHONE_MORE_OPTIONS",o.OTP_PHONE_VERIFY_CODE="OTP_PHONE_VERIFY_CODE",o.PHONE_SIGNUP="PHONE_SIGNUP",o.UNIFIED_SIGNUP="UNIFIED_SIGNUP"})(M||(e.SignupPaneViews=M={}));const u={[M.PHONE_SIGNUP]:'phone',[M.EMAIL_SIGNUP]:'email',[M.MOWEB_EMAIL_SIGNUP]:'moweb_email',[M.ALL_SIGNUP_OPTIONS]:'all_options',[M.UNIFIED_SIGNUP]:'unified',[M.OTP_PHONE_MORE_OPTIONS]:'phone_otp_more_options',[M.OTP_PHONE_VERIFY_CODE]:'phone_otp_verify_code'};let l,T;e.SignupPaneViewsForLogging=u,e.SignupFormSteps=l,(function(o){o.ACCOUNT_INFO="ACCOUNT_INFO",o.PROFILE_INFO="PROFILE_INFO",o.UPDATE_PASSWORD="UPDATE_PASSWORD"})(l||(e.SignupFormSteps=l={})),e.MowebEmailViews=T,(function(o){o.EMAIL_AND_PASSWORD="EMAIL_AND_PASSWORD",o.NAMES_AND_BIRTHDATE="NAMES_AND_BIRTHDATE",o.TOS="TOS",o.TOS_DECLINED="TOS_DECLINED"})(T||(e.MowebEmailViews=T={}));const c={ACCOUNT_LOOKUP:'account-lookup',EMAIL_LOGIN:'email-login',FORGOT_PASSWORD:'forgot-password',OTP_PHONE_LOGIN:'otp-phone-login',PHONE_LOGIN:'phone-login',PHONE_OR_EMAIL_LOGIN:'phone-or-email-login'};e.FormNamesForIDs=c;const h={[E.EMAIL_LOGIN]:c.EMAIL_LOGIN,forgot_password:c.FORGOT_PASSWORD,[E.OTP_PHONE_LOGIN]:c.OTP_PHONE_LOGIN,[E.PHONE_LOGIN]:c.PHONE_LOGIN,[E.PHONE_OR_EMAIL_LOGIN]:c.PHONE_OR_EMAIL_LOGIN};let G,p,H,D,U,R;e.LoginMethodToFormNameForIDs=h,e.ModalTypes=G,(function(o){o.MODAL_TYPE_SIGNUP="signup",o.MODAL_TYPE_LOGIN="login"})(G||(e.ModalTypes=G={})),e.Panes=p,(function(o){o.LOGIN="login",o.SIGNUP="signup"})(p||(e.Panes=p={})),e.Platforms=H,(function(o){o.WEB="web",o.MOWEB="moweb"})(H||(e.Platforms=H={})),e.AuthModalLifecycleStages=D,(function(o){o.INITIAL="INITIAL",o.MODAL_OPENED="MODAL_OPENED",o.FLOW_FINISHED="FLOW_FINISHED"})(D||(e.AuthModalLifecycleStages=D={})),e.AuthBoxLifecycleStages=U,(function(o){o.INITIAL="INITIAL",o.AUTH_FINISHED="AUTH_FINISHED",o.FLOW_FINISHED="FLOW_FINISHED"})(U||(e.AuthBoxLifecycleStages=U={})),e.Providers=R,(function(o){o.FACEBOOK="Facebook",o.GOOGLE="Google",o.WECHAT="WeChat",o.ALIPAY="Alipay",o.WEIBO="Weibo",o.APPLE="Apple",o.NAVER="Naver"})(R||(e.Providers=R={}));const F=[R.WECHAT,R.ALIPAY,R.WEIBO];let f,C;e.NonPopupProviders=F,e.ContextualLoginMethods=f,(function(o){o.facebook="facebook",o.google="google",o.email="email",o.onelogin="onelogin",o.phone="phone",o.weibo="weibo",o.alipay="alipay",o.wechat="wechat"})(f||(e.ContextualLoginMethods=f={})),e.SuggestedLoginMethods=C,(function(o){o.email="email",o.facebook="facebook",o.google="google",o.apple="apple",o.naver="naver",o.otp_phone="otp_phone",o.onelogin="onelogin",o.undecided="undecided"})(C||(e.SuggestedLoginMethods=C={}));const w={[C.email]:'Email',[C.facebook]:'Facebook',[C.google]:'Google',[C.apple]:'Apple',[C.naver]:'Naver',[C.otp_phone]:'Phone',[C.onelogin]:'OneLogin',[C.undecided]:'Undecided'};let B,V,b,y,W;e.SuggestedLoginMethodLabels=w,e.SuggestedLoginViews=B,(function(o){o.single="single",o.multiple="multiple"})(B||(e.SuggestedLoginViews=B={})),e.SocialAuthMethods=V,(function(o){o.ALIPAY="alipay",o.FACEBOOK="facebook",o.FACEBOOK_PROMPT="facebook_prompt",o.GOOGLE="google",o.ONELOGIN="onelogin",o.WECHAT="wechat",o.WEIBO="weibo",o.APPLE="apple",o.HUAWEI="huawei",o.NAVER="naver"})(V||(e.SocialAuthMethods=V={})),e.SocialAuthSource=b,(function(o){o.LOGIN_PROMPT="login_prompt",o.SUGGESTED_LOGIN="suggested_login",o.FACEBOOK_PROMPT="facebook_prompt",o.LOGIN="login",o.SIGNUP="signup"})(b||(e.SocialAuthSource=b={})),e.LoginPaneViews=y,(function(o){o.DEFAULT="default",o.SUGGESTED_LOGIN="suggested_login",o.EMAIL_UNIFIED="email_unified",o.EMAIL_UNIFIED_PASSWORD="email_unified_password",o.EMAIL_UNIFIED_SIGNUP="email_unified_signup",o.OTP_PHONE_VERIFY_CODE="otp_phone_verify_code",o.OTP_PHONE_MORE_OPTIONS="otp_phone_more_options",o.OTP_EMAIL_VERIFICATION="otp_email_verification",o.OTP_LOG_IN_ANOTHER_WAY="otp_log_in_another_way"})(y||(e.LoginPaneViews=y={})),e.CombineAuthPaneViews=W,(function(o){o.ALL_LOGIN_OPTIONS="ALL_LOGIN_OPTIONS",o.OTP_PHONE_LOGIN="OTP_PHONE_LOGIN",o.OTP_PHONE_VERIFY_CODE="OTP_PHONE_VERIFY_CODE",o.OTP_PHONE_MORE_OPTIONS="OTP_PHONE_MORE_OPTIONS",o.PHONE_OR_EMAIL_LOGIN="PHONE_OR_EMAIL_LOGIN",o.OTP_PHONE_SIGNUP="OTP_PHONE_SIGNUP",o.EMAIL_SIGNUP="EMAIL_SIGNUP"})(W||(e.CombineAuthPaneViews=W={}));const Y={[W.ALL_LOGIN_OPTIONS]:E.OTP_PHONE_LOGIN,[W.OTP_PHONE_LOGIN]:E.OTP_PHONE_LOGIN,[W.OTP_PHONE_VERIFY_CODE]:E.OTP_PHONE_LOGIN,[W.PHONE_OR_EMAIL_LOGIN]:E.PHONE_OR_EMAIL_LOGIN};e.CombineAuthPaneViewToMethods=Y;let v;e.LocalStorageKeys={LOGOUT_ANYWAY_COUNT_V3:'logout_anyway_count_v3',LOGIN_PROMPT_DISMISSED:'login_prompt_dismissed',FACEBOOK_PROMPT_DISMISSED:'facebook_prompt_dismissed',FACEBOOK_PROMPT_DISMISSED_P3:'facebook_prompt_dismissed_p3',FACEBOOK_PROMPT_SHOW_COUNT:'facebook_prompt_show_count'},e.BirthdateValidationStates=v,(function(o){o.INVALID="INVALID",o.UNDER_THIRTEEN="UNDER_THIRTEEN",o.UNDER_EIGHTEEN="UNDER_EIGHTEEN",o.OVER_EIGHTEEN="OVER_EIGHTEEN"})(v||(e.BirthdateValidationStates=v={}));let k;e.PhoneSignupErrorStatuses={PHONE_ALREADY_USED_BY_PHONE_ACCOUNT:'phone_already_used_by_phone_account',PHONE_ALREADY_USED_BY_EMAIL_ACCOUNT:'phone_already_used_by_email_account',PHONE_ALREADY_USED_BY_SOCIAL_ACCOUNT:'phone_already_used_by_social_account',PHONE_ALREADY_USED_BY_EMAIL_OR_SOCIAL_ACCOUNT:'phone_already_used_by_email_or_social_account'},e.SwitchModalSource=k,(function(o){o.ERROR_MESSAGE="error_message",o.SWITCH_CTA="switch_cta"})(k||(e.SwitchModalSource=k={}));e.AuthPagePaths={ACCOUNT_LINKING:'/account_linking',AUTHENTICATE:'/authenticate'};e.DEFAULT_DELAY_SECONDS=60}),"b616d2",["6126d0"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.getFacebookBootstrapData=function(){const t=o.default.get('facebook-init');return!!t?.enabled&&t};var o=t(r(d[1]))}),"f08ba7",["ba7a76","0a58da"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/initializers/facebook/index.25a162696b.js.map