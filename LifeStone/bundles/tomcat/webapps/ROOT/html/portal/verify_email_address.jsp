<%--
/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
--%>

<%@ include file="/html/portal/init.jsp" %>

<%
String currentURL = PortalUtil.getCurrentURL(request);

String referer = ParamUtil.getString(request, WebKeys.REFERER, currentURL);

if (referer.equals(themeDisplay.getPathMain() + "/portal/update_email_address")) {
	referer = themeDisplay.getPathMain() + "?doAsUserId=" + themeDisplay.getDoAsUserId();
}
else if (currentURL.startsWith(themeDisplay.getPathMain() + "/portal/verify_email_address")) {
	long requestPlid = ParamUtil.getLong(request, "p_l_id");

	if (requestPlid > 0) {
		referer = PortalUtil.getLayoutURL(LayoutLocalServiceUtil.getLayout(requestPlid), themeDisplay);
	}
	else {
		referer = themeDisplay.getPathMain();
	}
}

String ticketKey = ParamUtil.getString(request, "ticketKey");
%>

<div class="sheet sheet-lg">
	<div class="sheet-header">
		<div class="autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col autofit-col-expand">
				<h2 class="sheet-title">
					<liferay-ui:message key="verify-email-address" />
				</h2>
			</div>

			<div class="autofit-col">
				<%@ include file="/html/portal/select_language.jspf" %>
			</div>
		</div>
	</div>

	<div class="sheet-text">
		<aui:form action='<%= themeDisplay.getPathMain() + "/portal/verify_email_address" %>' method="post" name="fm">
			<aui:input name="p_l_id" type="hidden" value="<%= layout.getPlid() %>" />
			<aui:input name="p_auth" type="hidden" value="<%= AuthTokenUtil.getToken(request) %>" />
			<aui:input name="doAsUserId" type="hidden" value="<%= themeDisplay.getDoAsUserId() %>" />
			<aui:input name="<%= Constants.CMD %>" type="hidden" value="<%= Constants.UPDATE %>" />
			<aui:input name="<%= WebKeys.REFERER %>" type="hidden" value="<%= referer %>" />

			<div class="alert alert-info">
				<liferay-ui:message key="please-enter-your-verification-code" />
			</div>

			<c:if test="<%= !SessionErrors.isEmpty(request) %>">
				<div class="alert alert-danger">
					<liferay-ui:message key="please-enter-a-valid-verification-code" />
				</div>
			</c:if>

			<aui:input class="lfr-input-text-container" label="email-verification-code" name="ticketKey" size="36" type="text" value="<%= ticketKey %>" />

			<aui:button-row>
				<aui:button type="submit" value="verify" />

				<c:if test="<%= themeDisplay.isSignedIn() && !user.isEmailAddressVerified() %>">
					<aui:button href='<%= themeDisplay.getPathMain() + "/portal/verify_email_address?p_l_id=" + layout.getPlid() + "&cmd=" + Constants.SEND + "&referer=" + URLCodec.encodeURL(referer) %>' value="send-new-verification-code" />

					<aui:button href='<%= themeDisplay.getPathMain() + "/portal/update_email_address?p_l_id=" + layout.getPlid() + "&referer=" + URLCodec.encodeURL(referer) %>' value="change-email-address" />

					<aui:button href='<%= themeDisplay.getPathMain() + "/portal/logout " %>' type="cancel" />
				</c:if>
			</aui:button-row>
		</aui:form>
	</div>
</div>