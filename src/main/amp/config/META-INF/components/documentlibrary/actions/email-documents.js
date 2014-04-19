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
                actionName: "onActionSendDocumentsViaEmail",
                fn: function onActionSendDocumentsViaEmail(file) {
                    var dlg = new Alfresco.module.SimpleDialog(this.id+
                            "-email-documents-"+
                            Alfresco.util.generateDomId());
                    var templateUrl = YAHOO.lang.substitute(
                            Alfresco.constants.URL_SERVICECONTEXT + 
                            "components/form?itemKind={itemKind}&itemId={itemId}&destination={destination}&mode={mode}&submitType={submitType}&showCancelButton=true",
                            {
                                itemKind: "action",
                                itemId: "emailDocumentsWithHistoryAction",
                                mode: "create",
                                submitType: "json",
                            });

                    dlg.setOptions(
                            {
                                width: "50em",
                                templateUrl: templateUrl,
                                onSuccess: {
                                    fn: function success(response) {
                                        Alfresco.util.PopupManager.displayMessage("success");
                                    }
                                },
                                onFailure: {
                                    fn: function fail(response) {
                                        Alfresco.util.PopupManager.displayMessage("fail");
                                    }
                                },
                                onTemplateLoaded: {
                                    fn: function templateLoaded(response){
                                        Alfresco.util.PopupManager.displayMessage(reponse);
                                    }
                                },
                                doBeforeDialogShow:{
                                    fn: function doBeforeDialogShow(form,dialog){
                                        var tmp = dialog.id+"_prop_to";
                                        YAHOO.util.Dom.get(tmp).value="test";
                                    }
                                },

                            });
                    dlg.show();
                }
            });
})();