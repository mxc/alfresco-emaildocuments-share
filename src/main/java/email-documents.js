/* 
 * Copyright (C) 2014 Jumping Bean
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionSendEmail",
        fn: function onActionSendEmail(file) {
            this.modules.actions.genericAction(
            {
                success:
                {
                    message: this.msg("message.sendAsEmail.success", file.displayName, Alfresco.constants.USERNAME)
                },
                failure:
                {
                    message: this.msg("message.sendAsEmail.failure", file.displayName, Alfresco.constants.USERNAME)
                },
                webscript:
                {
                    name: "mycompany/sendDocInEmail?nodeRef={nodeRef}&userName={userName}",
                    stem: Alfresco.constants.PROXY_URI,
                    method: Alfresco.util.Ajax.GET,
                    params:
                    {
                        nodeRef: file.nodeRef,
                        userName: Alfresco.constants.USERNAME
                    }
                },
                config:
                {
                }

            });
        }
    });
})();