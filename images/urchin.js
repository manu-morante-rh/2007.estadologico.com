<html>
<head>


<!-- Start Wayback Rewrite JS Include -->
<script type="text/javascript" src="/static/js/jwplayer/jwplayer.js" ></script>
<script type="text/javascript" src="/static/js/video-embed-rewriter.js"></script>
<script type="text/javascript">
function initYTVideo(id)
{
	_wmVideos_.init("/web/", id);
}
</script>
<!-- End Wayback Rewrite JS Include -->

<title>Google Analytics</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="/web/20070628061856js_/https://ssl.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript">
  _uacct="UA-10005-1";
  _utcp="/analytics/";
  _uanchor=1;
  urchinTracker();
</script>

<script language="javascript" type="text/javascript">
function toggleLang(){

var loc = window.location.toString();

var langArray = new Array();
	langArray[0] =  'en-US';
	langArray[1] =  'en-GB';
	langArray[2] =  'fr-FR';
	langArray[3] =  'it-IT';
	langArray[4] =  'de-DE';
	langArray[5] =  'es-ES';
	langArray[6] =  'nl-NL';
	langArray[7] =  'ja-JP';
	langArray[8] =  'ko-KR';
	langArray[9] =  'zh-CN';
	langArray[10] = 'zh-TW';
	langArray[11] = 'pt-BR';
	langArray[12] = 'da-DK';
	langArray[13] = 'fi-FI';
	langArray[14] = 'no-NO';
	langArray[15] = 'sv-SE';
	langArray[16] = 'ru-RU';
	
	for(var i=0; i<langArray.length;i++){
		if (loc.indexOf(langArray[i])>0){
			document.getElementById('menu').options[i].selected=true;	
			break;
		} else {
			document.getElementById('menu').options[0].selected=true;
		}
	} 
}
</script>
<link href="/web/20070628061856cs_/http://www.google.com/analytics/_main.css" rel="stylesheet" type="text/css" />
<link href="/web/20070628061856cs_/http://www.google.com/analytics/_home.css" rel="stylesheet" type="text/css" />
<script language="javascript">

function getRandomNumber(theNumber){
var ranNum= Math.floor(Math.random()*theNumber);
  return ranNum;
}

function getCS(){
var numOfCases = 9;
var theDiv = document.getElementById('case_study');
var theImg = document.getElementById('case_study_image');
var theLittleImg = document.getElementById('cs_link_img');
var cs_num=getRandomNumber(numOfCases);

var cs_link=new Array(numOfCases)
   cs_link[0]='case_study_cke.html';
   cs_link[1]='case_study_builddirect.html';
   cs_link[2]='case_study_roche.html';
   cs_link[3]='case_study_agency.html';
   cs_link[4]='case_study_deckers.html';
   cs_link[5]='case_study_discount_tire.html';
   cs_link[6]='case_study_financial_times.html';
   cs_link[7]='case_study_remax.html';
   cs_link[8]='case_study_career_builder.html';

var cs=new Array(numOfCases)
   cs[0]="<a href=\"" + cs_link[0] + "\">CKE Restaurants, Inc.</a> drives brand lift with Google Analytics.";
   cs[1]="<a href=\"" + cs_link[1] + "\">BuildDirect</a> increased sales 50% using Google Analytics.";
   cs[2]="<a href=\"" + cs_link[2] + "\">Roche\'s</a> Accu-Chek improves global customer communications with Google Analytics.";
   cs[3]="<a href=\"" + cs_link[3] + "\">SurePoint Lending and Agency.com</a> increased the conversion rate on its client site by 25% with Google Analytics.";
   cs[4]="<a href=\"" + cs_link[4] + "\">Deckers</a> increased ROI by 188% a month with Google Analytics.";
   cs[5]="<a href=\"" + cs_link[5] + "\">Discount Tire</a> increased online sales by 14% in the first week using Google Analytics.";
   cs[6]="<a href=\"" + cs_link[6] + "\">FT.com</a> increased traffic from its promotional landing pages 50% using Google Analytics.";
   cs[7]="<a href=\"" + cs_link[7] + "\">RE/MAX</a> launched a new Internet strategy using Google Analytics.";
   cs[8]="<a href=\"" + cs_link[8] + "\">CareerBuilder.coms</a> Innovative Marketing Methodology Ties Offline Marketing Events to Online Lift.";

   theDiv.innerHTML = (cs[cs_num]);
   theImg.src="/analytics/images/home_3b2_" + cs_num + ".gif";
   theLittleImg.href=(cs_link[cs_num]);
}

function getBanner(){
var ban_num = getRandomNumber(9) + 1;
var theBanImg = document.getElementById('header_banner');
   theBanImg.src="images/banner0" + ban_num + ".gif";
}
</script>
</head>

<body onLoad="toggleLang();">
<!-- BEGIN WAYBACK TOOLBAR INSERT -->

<script type="text/javascript" src="/static/js/disclaim-element.js" ></script>
<script type="text/javascript" src="/static/js/graph-calc.js" ></script>
<script type="text/javascript" src="/static/jflot/jquery.min.js" ></script>
<script type="text/javascript">
//<![CDATA[
var firstDate = 820454400000;
var lastDate = 1388534399999;
var wbPrefix = "/web/";
var wbCurrentUrl = "http:\/\/www.google.com\/analytics\/";

var curYear = -1;
var curMonth = -1;
var yearCount = 18;
var firstYear = 1996;
var imgWidth = 450;
var yearImgWidth = 25;
var monthImgWidth = 2;
var trackerVal = "none";
var displayDay = "28";
var displayMonth = "jun";
var displayYear = "2007";
var prettyMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function showTrackers(val) {
	if(val == trackerVal) {
		return;
	}
	if(val == "inline") {
		document.getElementById("displayYearEl").style.color = "#ec008c";
		document.getElementById("displayMonthEl").style.color = "#ec008c";
		document.getElementById("displayDayEl").style.color = "#ec008c";		
	} else {
		document.getElementById("displayYearEl").innerHTML = displayYear;
		document.getElementById("displayYearEl").style.color = "#ff0";
		document.getElementById("displayMonthEl").innerHTML = displayMonth;
		document.getElementById("displayMonthEl").style.color = "#ff0";
		document.getElementById("displayDayEl").innerHTML = displayDay;
		document.getElementById("displayDayEl").style.color = "#ff0";
	}
   document.getElementById("wbMouseTrackYearImg").style.display = val;
   document.getElementById("wbMouseTrackMonthImg").style.display = val;
   trackerVal = val;
}
function getElementX2(obj) {
	var thing = jQuery(obj);
	if((thing == undefined) 
			|| (typeof thing == "undefined") 
			|| (typeof thing.offset == "undefined")) {
		return getElementX(obj);
	}
	return Math.round(thing.offset().left);
}
function trackMouseMove(event,element) {

   var eventX = getEventX(event);
   var elementX = getElementX2(element);
   var xOff = eventX - elementX;
	if(xOff < 0) {
		xOff = 0;
	} else if(xOff > imgWidth) {
		xOff = imgWidth;
	}
   var monthOff = xOff % yearImgWidth;

   var year = Math.floor(xOff / yearImgWidth);
	var yearStart = year * yearImgWidth;
   var monthOfYear = Math.floor(monthOff / monthImgWidth);
   if(monthOfYear > 11) {
       monthOfYear = 11;
   }
   // 1 extra border pixel at the left edge of the year:
   var month = (year * 12) + monthOfYear;
   var day = 1;
	if(monthOff % 2 == 1) {
		day = 15;
	}
	var dateString = 
		zeroPad(year + firstYear) + 
		zeroPad(monthOfYear+1,2) +
		zeroPad(day,2) + "000000";

	var monthString = prettyMonths[monthOfYear];
	document.getElementById("displayYearEl").innerHTML = year + 1996;
	document.getElementById("displayMonthEl").innerHTML = monthString;
	// looks too jarring when it changes..
	//document.getElementById("displayDayEl").innerHTML = zeroPad(day,2);

	var url = wbPrefix + dateString + '/' +  wbCurrentUrl;
	document.getElementById('wm-graph-anchor').href = url;

   //document.getElementById("wmtbURL").value="evX("+eventX+") elX("+elementX+") xO("+xOff+") y("+year+") m("+month+") monthOff("+monthOff+") DS("+dateString+") Moy("+monthOfYear+") ms("+monthString+")";
   if(curYear != year) {
       var yrOff = year * yearImgWidth;
       document.getElementById("wbMouseTrackYearImg").style.left = yrOff + "px";
       curYear = year;
   }
   if(curMonth != month) {
       var mtOff = year + (month * monthImgWidth) + 1;
       document.getElementById("wbMouseTrackMonthImg").style.left = mtOff + "px";
       curMonth = month;
   }
}
//]]>
</script>

<style type="text/css">body{margin-top:0!important;padding-top:0!important;min-width:800px!important;}#wm-ipp a:hover{text-decoration:underline!important;}</style>
<div id="wm-ipp" style="display:none; position:relative;padding:0 5px;min-height:70px;min-width:800px; z-index:9000;">
<div id="wm-ipp-inside" style="position:fixed;padding:0!important;margin:0!important;width:97%;min-width:780px;border:5px solid #000;border-top:none;background-image:url(/static/images/toolbar/wm_tb_bk_trns.png);text-align:center;-moz-box-shadow:1px 1px 3px #333;-webkit-box-shadow:1px 1px 3px #333;box-shadow:1px 1px 3px #333;font-size:11px!important;font-family:'Lucida Grande','Arial',sans-serif!important;">
   <table style="border-collapse:collapse;margin:0;padding:0;width:100%;"><tbody><tr>
   <td style="padding:10px;vertical-align:top;min-width:110px;">
   <a href="/web/" title="Wayback Machine home page" style="background-color:transparent;border:none;"><img src="/static/images/toolbar/wayback-toolbar-logo.png" alt="Wayback Machine" width="110" height="39" border="0"/></a>
   </td>
   <td style="padding:0!important;text-align:center;vertical-align:top;width:100%;">

       <table style="border-collapse:collapse;margin:0 auto;padding:0;width:570px;"><tbody><tr>
       <td style="padding:3px 0;" colspan="2">
       <form target="_top" method="get" action="/web/form-submit.jsp" name="wmtb" id="wmtb" style="margin:0!important;padding:0!important;"><input type="text" name="url" id="wmtbURL" value="http://www.google.com/analytics/" style="width:400px;font-size:11px;font-family:'Lucida Grande','Arial',sans-serif;" onfocus="javascript:this.focus();this.select();" /><input type="hidden" name="type" value="replay" /><input type="hidden" name="date" value="20070628061856" /><input type="submit" value="Go" style="font-size:11px;font-family:'Lucida Grande','Arial',sans-serif;margin-left:5px;" /><span id="wm_tb_options" style="display:block;"></span></form>
       </td>
       <td style="vertical-align:bottom;padding:5px 0 0 0!important;" rowspan="2">
           <table style="border-collapse:collapse;width:110px;color:#99a;font-family:'Helvetica','Lucida Grande','Arial',sans-serif;"><tbody>
			
           <!-- NEXT/PREV MONTH NAV AND MONTH INDICATOR -->
           <tr style="width:110px;height:16px;font-size:10px!important;">
           	<td style="padding-right:9px;font-size:11px!important;font-weight:bold;text-transform:uppercase;text-align:right;white-space:nowrap;overflow:visible;" nowrap="nowrap">
               
		                <a href="/web/20070527221624/http://www.google.com/analytics/#utm_source=en-ha-na-content_gen_web_analytics_kwi" style="text-decoration:none;color:#33f;font-weight:bold;background-color:transparent;border:none;" title="27 may 2007"><strong>MAY</strong></a>
		                
               </td>
               <td id="displayMonthEl" style="background:#000;color:#ff0;font-size:11px!important;font-weight:bold;text-transform:uppercase;width:34px;height:15px;padding-top:1px;text-align:center;" title="You are here: 6:18:56 jun 28, 2007">JUN</td>
				<td style="padding-left:9px;font-size:11px!important;font-weight:bold;text-transform:uppercase;white-space:nowrap;overflow:visible;" nowrap="nowrap">
               
		                <a href="/web/20070808060611/http://www.google.com/analytics/" style="text-decoration:none;color:#33f;font-weight:bold;background-color:transparent;border:none;" title="8 ago 2007"><strong>AGO</strong></a>
		                
               </td>
           </tr>

           <!-- NEXT/PREV CAPTURE NAV AND DAY OF MONTH INDICATOR -->
           <tr>
               <td style="padding-right:9px;white-space:nowrap;overflow:visible;text-align:right!important;vertical-align:middle!important;" nowrap="nowrap">
               
		                <a href="/web/20070628041120/http://www.google.com/analytics/" title="4:11:20 jun 28, 2007" style="background-color:transparent;border:none;"><img src="/static/images/toolbar/wm_tb_prv_on.png" alt="Previous capture" width="14" height="16" border="0" /></a>
		                
               </td>
               <td id="displayDayEl" style="background:#000;color:#ff0;width:34px;height:24px;padding:2px 0 0 0;text-align:center;font-size:24px;font-weight: bold;" title="You are here: 6:18:56 jun 28, 2007">28</td>
				<td style="padding-left:9px;white-space:nowrap;overflow:visible;text-align:left!important;vertical-align:middle!important;" nowrap="nowrap">
               
		                <a href="/web/20070629143931/http://www.google.com/analytics/#utm_source=en-ha-na-google_brand_goog_analytics&amp;utm_medium=ha&amp;utm_campaign=en&amp;utm_term=analytics" title="14:39:31 jun 29, 2007" style="background-color:transparent;border:none;"><img src="/static/images/toolbar/wm_tb_nxt_on.png" alt="Next capture" width="14" height="16" border="0"/></a>
		                
			    </td>
           </tr>

           <!-- NEXT/PREV YEAR NAV AND YEAR INDICATOR -->
           <tr style="width:110px;height:13px;font-size:9px!important;">
				<td style="padding-right:9px;font-size:11px!important;font-weight: bold;text-align:right;white-space:nowrap;overflow:visible;" nowrap="nowrap">
               
		                <a href="/web/20060615201407/http://www.google.com/analytics/" style="text-decoration:none;color:#33f;font-weight:bold;background-color:transparent;border:none;" title="15 jun 2006"><strong>2006</strong></a>
		                
               </td>
               <td id="displayYearEl" style="background:#000;color:#ff0;font-size:11px!important;font-weight: bold;padding-top:1px;width:34px;height:13px;text-align:center;" title="You are here: 6:18:56 jun 28, 2007">2007</td>
				<td style="padding-left:9px;font-size:11px!important;font-weight: bold;white-space:nowrap;overflow:visible;" nowrap="nowrap">
               
		                <a href="/web/20080703015348/http://www.google.com/analytics/" style="text-decoration:none;color:#33f;font-weight:bold;background-color:transparent;border:none;" title="3 jul 2008"><strong>2008</strong></a>
		                
				</td>
           </tr>
           </tbody></table>
       </td>

       </tr>
       <tr>
       <td style="vertical-align:middle;padding:0!important;">
           <a href="/web/20070628061856*/http://www.google.com/analytics/" style="color:#33f;font-size:11px;font-weight:bold;background-color:transparent;border:none;" title="See a list of every capture for this URL"><strong>8.920 captures</strong></a>
           <div style="margin:0!important;padding:0!important;color:#666;font-size:9px;padding-top:2px!important;white-space:nowrap;" title="Timespan for captures of this URL">24 nov 05 - 29 jul 13</div>
       </td>
       <td style="padding:0!important;">
       <a style="position:relative; white-space:nowrap; width:450px;height:27px;" href="" id="wm-graph-anchor">
       <div id="wm-ipp-sparkline" style="position:relative; white-space:nowrap; width:450px;height:27px;background-color:#fff;cursor:pointer;border-right:1px solid #ccc;" title="Explore captures for this URL">
			<img id="sparklineImgId" style="position:absolute; z-index:9012; top:0px; left:0px;"
				onmouseover="showTrackers('inline');" 
				onmouseout="showTrackers('none');"
				onmousemove="trackMouseMove(event,this)"
				alt="sparklines"
				width="450"
				height="27"
				border="0"
				src="/web/jsp/graph.jsp?graphdata=450_27_1996:-1:000000000000_1997:-1:000000000000_1998:-1:000000000000_1999:-1:000000000000_2000:-1:000000000000_2001:-1:000000000000_2002:-1:000000000000_2003:-1:000000000000_2004:-1:000000000000_2005:-1:00000000007a_2006:-1:971711552457_2007:5:58a799888a98_2008:-1:456554725116_2009:-1:476564111303_2010:-1:266555253786_2011:-1:786655566bcd_2012:-1:eefdeddddddd_2013:-1:ddddddc00000"></img>
			<img id="wbMouseTrackYearImg" 
				style="display:none; position:absolute; z-index:9010;"
				width="25" 
				height="27"
				border="0"
				src="/static/images/toolbar/transp-yellow-pixel.png"></img>
			<img id="wbMouseTrackMonthImg"
				style="display:none; position:absolute; z-index:9011; " 
				width="2"
				height="27" 
				border="0"
				src="/static/images/toolbar/transp-red-pixel.png"></img>
       </div>
		</a>

       </td>
       </tr></tbody></table>
   </td>
   <td style="text-align:right;padding:5px;width:65px;font-size:11px!important;">
       <a href="javascript:;" onclick="document.getElementById('wm-ipp').style.display='none';" style="display:block;padding-right:18px;background:url(/static/images/toolbar/wm_tb_close.png) no-repeat 100% 0;color:#33f;font-family:'Lucida Grande','Arial',sans-serif;margin-bottom:23px;background-color:transparent;border:none;" title="Close the toolbar">Close</a>
       <a href="http://faq.web.archive.org/" style="display:block;padding-right:18px;background:url(/static/images/toolbar/wm_tb_help.png) no-repeat 100% 0;color:#33f;font-family:'Lucida Grande','Arial',sans-serif;background-color:transparent;border:none;" title="Get some help using the Wayback Machine">Help</a>
   </td>
   </tr></tbody></table>

</div>
</div>
<script type="text/javascript">
 var wmDisclaimBanner = document.getElementById("wm-ipp");
 if(wmDisclaimBanner != null) {
   disclaimElement(wmDisclaimBanner);
 }
</script>
<!-- END WAYBACK TOOLBAR INSERT -->

<center>

<div id="tnav">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <form>
            <tr>
                <td width="231" rowspan="2"><a href="/web/20070628061856/http://www.google.com/analytics/index.html"><img alt="" src="/web/20070628061856im_/http://www.google.com/analytics/images/logo_ga.gif" id="logo" /></a></td>
                <td align="right" valign="top"><select name="menu" id="menu" onchange="location.href=this.options[this.selectedIndex].value+window.location.href.split('/').pop()" value="GO">
																						<option value="/analytics/" selected>US English</option>
																						<option value="/analytics/en-GB/">UK English</option>
																						<option value="/analytics/fr-FR/">Français</option>
																						<option value="/analytics/it-IT/">Italiano</option>
																						<option value="/analytics/de-DE/">Deutsch</option>
																						<option value="/analytics/es-ES/">Español</option>
																						<option value="/analytics/nl-NL/">Nederlands</option>
																						<option value="/analytics/ja-JP/">日本語</option>
																						<option value="/analytics/ko-KR/">한국어</option>
																						<option value="/analytics/zh-CN/">中文 (简体)</option>
																						<option value="/analytics/zh-TW/">中文 (繁體)</option>
																						<option value="/analytics/pt-BR/">Português (Brasil)</option>
																						<option value="/analytics/da-DK/">Dansk</option>
																						<option value="/analytics/fi-FI/">suomi</option>
																						<option value="/analytics/no-NO/">Norsk</option>
																						<option value="/analytics/sv-SE/">Svenska</option>
																						<option value="/analytics/ru-RU/">Русский</option>
                    </select>
                </td>
            </tr>
        </form>
        <tr>
            <td align="right" valign="bottom"><div id="tnavitems"><span class="end">&nbsp;</span><a href="/web/20070628061856/http://www.google.com/analytics/index.html" class="select">Home</a><a href="/web/20070628061856/http://www.google.com/analytics/features.html">Features</a><a href="/web/20070628061856/http://www.google.com/analytics/support_overview.html">Support</a><a href="/web/20070628061856/http://analytics.blogspot.com/">Blog</a><a href="/web/20070628061856/http://www.google.com/analytics/conversionuniversity.html">Conversion University</a></div></td>
        </tr>
    </table>
</div>

<div id="headlineorange">
  <div class="center">
    <table height="120" width="760" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="left" valign="middle">
         <a href="/web/20070628061856/http://services.google.com/analytics/tour/index_en-US.html" onClick="javascript:urchinTracker('/analytics/site/tour_en-US.html');"><img alt="" src="/web/20070628061856im_/http://www.google.com/analytics/images/banner_01.gif" id="header_banner" border="0" /></a>
         <script language="javascript" type="text/javascript">getBanner();</script>
      </td>
      </tr>
    </table>
  </div>
</div>

<div id="container">
  <br />

   <div id="contenthome">
      <table cellpadding="10" cellspacing="0" border="0" style="margin-bottom:10px;">
         <tr>
            <td valign="top">
              <h3 class="blue">The New Google Analytics</h3>
              <p>Google Analytics has been re-designed to help you learn even more about where your visitors come from and how they interact with your site.</p>
              <h3 class="blue">Discover. Share. Act.</h3>
              <p>The new Google Analytics makes it easy to improve your results online. Write better ads, strengthen your marketing initiatives, and create higher-converting websites. Google Analytics is free to all advertisers, publishers, and site owners.</p>
            </td>
            <td valign="top">
               <a href="/web/20070628061856/http://www.google.com/analytics/sign_up.html">
               <img alt="Learn more about Google Analytics" src="/web/20070628061856im_/http://www.google.com/analytics/images/intro_small_new.jpg" width="189" height="162" style="border:1px solid #CCCCCC;">
               </a>
               <br />
               <h3 class="blue2" align="center"><a href="/web/20070628061856/http://www.google.com/analytics/sign_up.html">Sign Up Now</a></h3>
            </td>
         </tr>
      </table>

      <table width="100%" border="0" cellspacing="0">
        <tr>
         <td class="home_3b1 home_3b_divide"><h4>Product Tour</h4>
         Get started today creating targeted ROI-driven marketing campaigns and improving your site design and content.</td>
         <td class="home_3b1 home_3b_divide"><h4>Case Studies</h4><div id="case_study"></div></td>
         <td class="home_3b1"><h4>Professional Services</h4>Purchase strategic consulting services and customized support packages from Google Analytics Partners.</td>
        </tr>
        <tr>
          <td class="home_3b2 home_3b_divide"><a href="/web/20070628061856/http://services.google.com/analytics/tour/index_en-US.html" onClick="javascript:urchinTracker('/analytics/site/tour_en-US.html');"><img src="/web/20070628061856im_/http://www.google.com/analytics/images/home_3b1_2.gif" width="142" height="32" border="0"></a></td>
         <td class="home_3b2 home_3b_divide"><a href="/web/20070628061856/http://www.google.com/analytics/case_studies.html" id="cs_link_img" onClick="javascript:urchinTracker('/analytics/site/case_studies.html');"><img border="0" id="case_study_image"></a>&nbsp;<script language="javascript" type="text/javascript">getCS();</script></td>
         <td class="home_3b2"><a href="/web/20070628061856/http://www.google.com/analytics/support_partner_provided.html" onClick="javascript:urchinTracker('/analytics/site/support_partner_provided.html');"><img src="/web/20070628061856im_/http://www.google.com/analytics/images/home_3b3.gif" border="0"></a></td>
        </tr>
      </table>
   
   </div>

   <div id="navhome">
       <div class="border">
          <div id="sidebarhome">
            <iframe class="login" src="/web/20070628061856if_/https://www.google.com/accounts/ServiceLoginBox?service=analytics&nui=1&hl=en&continue=http://www.google.com/analytics/home/%3Fet%3Dreset%26hl%3D" marginwidth="0" marginheight="0" id="login" align="middle" frameborder="0" scrolling="no" width="220" height="250">
               <center>
               <a href="/web/20070628061856/https://www.google.com/accounts?hl=en">Sign in to your Google Account</a>
               </center>
            </iframe>
       </div>
    </div>
   
    <div class="newsbox">
      <h3 class="blue" style="margin:5px 4px 5px 4px;">News &amp; Announcements</h3>
	<div class="newsitem" style="padding-bottom:0px; padding-top:0px;">
		<div id="blog_posts" style="font-size:11px;">
		<script type="text/javascript">
		
		function build_posts(data) {
		  var container = document.getElementById('blog_posts');
		  var list = document.createElement('div');
		  // Loop through all data items returned
		  for (i in data.items) {
			var item = data.items[i];
			var post = document.createElement('p');
			date = new Date(item.published*1000);
			month = date.getMonth()+1;
			day = date.getDate();
			year = date.getFullYear();
			h = date.getHours();
			m = date.getMinutes();
		
			// Post processing on date values
			if (m < 10) m = "0"+m;
			
			if (h > 12) {
			  h = h-12;
			  a = "PM";
			} else {
			  a = "AM"
			}
			   
		   dateDisplay = month+"/"+day+"/"+year+" "+h+":"+m+" "+a;
			
			var timestamp = document.createElement('span');
			timestamp.style.color = "#666";
			timestamp.appendChild(document.createTextNode(dateDisplay));
			//post.appendChild(timestamp);
			//post.appendChild(document.createElement('br'));
		
			var link = document.createElement('a');
			link.appendChild(document.createTextNode(item.title));
			link.href = item.alternate.href;
			
			var snippet = '';
			if (item.contentSnippet) {
			  snippet = item.contentSnippet;
			  if (snippet.indexOf('\n\n') != -1) {
				snippet = snippet.split('\n\n');
				snippet = snippet[1].replace(/\n/g,'');
				if (snippet.charAt(snippet.length-5) == '.') {
				  snippet = snippet.substring(0,snippet.length-4);
				}
			  } 
			}
			
			post.appendChild(link);
			post.appendChild(document.createElement('br'));
			post.appendChild(document.createTextNode(snippet));
			list.appendChild(post);
		  }
		  
		  
		  
		  var moreLinkBold = document.createElement('b');
		  var moreLink = document.createElement('a');
			moreLink.style.color="#666";
		  moreLink.appendChild(document.createTextNode("Google Analytics Blog"));
		  moreLink.id = "moreposts";
		  moreLink.href = "/web/20070628061856/http://analytics.blogspot.com/";
		  moreLinkBold.appendChild(moreLink);
		  
		
		  //start
		  var moreContainer = document.createElement('div');
			moreContainer.style.cssFloat = 'left';
			moreContainer.style.styleFloat = 'left';
			moreContainer.style.marginRight = '5px'
		  var moreContainerImg = document.createElement('div');
			moreContainerImg.style.cssFloat = 'left';
			moreContainerImg.style.styleFloat = 'left';
		  var arrowImg = document.createElement('img')
			arrowImg.src = '/analytics/images/bullet_arrow.gif';
		  var moreContainerClear = document.createElement('div');
			moreContainerClear.style.clear = 'both';
						  
		  moreContainer.appendChild(moreLink);
		  moreContainerImg.appendChild(arrowImg);
		  //end
		
		
		  container.appendChild(list);
		  container.appendChild(moreContainer);
		  container.appendChild(moreContainerImg);
		  container.appendChild(moreContainerClear);
		
		}
		</script>
		
		<script type="text/javascript" src="/web/20070628061856js_/http://www.google.com/reader/public/javascript/feed/http://analytics.blogspot.com/atom.xml?n=1&callback=build_posts"></script>
		<noscript>
		For Googler insights into product and technology news visit the <a href="/web/20070628061856/http://analytics.blogspot.com/">Official Google Blog</a>.
		</noscript>
		</div>
	</div>	
   </div>
  
  </div>

</div>

<div id="footer_container">
    <div class="footer">&copy; 2007 Google - 
      <a href="/web/20070628061856/http://www.google.com/analytics/index.html">Analytics Home</a> - 
      <a href="/web/20070628061856/http://www.google.com/analytics/tos.html">Terms of Service</a> - 
      <a href="/web/20070628061856/http://www.google.com/intl/en_ALL/privacy.html">Privacy Policy</a> - 
      <a href="/web/20070628061856/http://www.google.com/support/googleanalytics/bin/request.py?hl=en">Contact Us</a>
    </div>
</div>

</center>
</body>
</html>





<!--
     FILE ARCHIVED ON 6:18:56 jun 28, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:54:27 ago 13, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
