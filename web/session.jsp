 <s:if test="%{#session.user==null}">
 <%  
response.sendRedirect("/index.jsp");
%>  
</s:if>