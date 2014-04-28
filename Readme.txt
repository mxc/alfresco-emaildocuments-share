Share Email Documents Action Module
==================================

This project is released under GPL v3. It is developed and maintained by 
Jumping Bean (www.jumpingbean.biz)

Developed and tests on alfresco community edition V4.2e/f. It should run on any
version of alfresco from the 4.2 branch. It may also run on earlier versions but
has not been tested.

This is the share module for the document library, email documents, document
library action. To build the project run:

                    mvn package

This will compile the project under the target directory and run the tests.
Currently there are no share tests. If there are any added later you can run

                    mvn -Dmaven.test.skip=true package

to skip test during the compilation process.Both of the above commands should 
result in a amp package being build under target directory. 
e.g. target/ShareEmailDocuments.amp

To deploy the amp file to the repository tier run
    
java -jar path-to-alfresco/bin/alfresco-mmt.jar 
    install target/ShareEmailDocuments.amp path-to-tomcat/webapps/share.war
    -verbose

You should backup the existing share.war file first just in case. 

Tests
=====

The are no test for the share tier.


How to use
==========

You need to deploy both the repo and share amp. The repository project is 
RepoEmailDocuments.amp and the share is ShareEmailDocuments.amp. See the Repo
modules readme.txt for how to compile and deploy.

Repository module source can be found at:

    https://github.com/mxc/alfresco-emaildocuments-repo

Once installed the share module should be auto-deployed. If the steps below result
in menus that are missing the menu items documented please go to

    http://path/to/share:[8080]/share/page/modules/deploy

and manually deploy the module. 

Quick How To
------------

The share module adds three new aspects.

    *Enable email document action (emaiable)
    *Enable email document action with history (emailableWithHistory)
    *Email Template (emailTemplate)

For each folder or document you wish to enable emailing for add either the 
emailable or emailablewithHistory. (You can add both if desired). This will 
enable the menu items on the document library's action menu.

If you wish to have a standard template for the mail you can also add the 
emailTempalte aspect. This will add properties under the content properites 
dialog for standard from, subject and body text.

For the emailableWithHistory aspect a new data list will be created called 
Email Archive. This will be visible under your sites data lists. If you have not
added data lists to your site you can add it to view the history of the document.

Detailed How To
-----------------

Once deployed follow the steps below to use the new action.

1) Select a folder while browsing a sites document library. Click the more
   menu item from the menu that appears on the right hand side of the library
   browser while hovering over the folder with your mouse. Then select the
   "Manage Aspects" item. If you wish to enable the actions for a document item 
   and not a folder then you will need to click on the document title to get to
   the expanded actions menu for the document. The "Manage Aspects" menu item 
   will then be available.

2) In the "Aspects for Reports" dialog box find the "Enable email document action"
   or the "Enable email document action with history". The list is not sorted
   alphabetically so you will need to scroll to find the options. The "Emailed"
   option is not the one to use for this module.

   The difference between the two options is the one will make a record of each
   email sent. The other will simply send the mail and not record the event. You
   can enable both options for a folder or item.

   You should now have a menu item "Email Docs" and/or "Email Docs & Record" 
   under the document library action menu items.


3) Optional: If you wish to define a standard template for the mail then you 
   must add the "Email Template" aspect to the folder/item. This will enable
   meta data properties for the from, subject and body text for all future 
   emails. This text can be overridden at the time the email is sent.

4) If you have enable the "Enable mail document action with history" all emails
   are recorded under a data list called "Email Archive". If you have not enabled
   data list for your site then add the "Site Page" from the "Customize Site"
   menu item available from your site's dashboard page.
