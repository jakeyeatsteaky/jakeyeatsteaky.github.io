#CLI Task Tracker

This tool should be a fast and easy way for me to:
1. Start a timer for any number of minutes for a given subject
    i.e.: `cli_timer -h 1 -m 15 -s 30 --subject="Daily Coding" --entry="Working on a cli tool"`
    The whole Idea is I want to be able to look back and see the subjects and entries and collate how much time I've spent doing whatever.  So 
    it should also have a manifest to store some of this metadata for my user session.

2. Some kind of audio cue to let me know that the timer is finished.  Or even a small background window to display the time. I'm not sure if this should hang onto that terminal, session, or just kick it off and have a dialogue when its up.

3. Usage should automatically store date and time.  Would be nice to be able to query time ranges too (SQLite?)

MVP:
    - get a cpp cli which can run this timer, organize the options passed in, and store them