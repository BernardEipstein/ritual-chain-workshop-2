# Resolution Data

I separated the resolution process into a few simple steps.

First the external value is received.

Then the value is parsed.

After that I check whether it is usable.

Only then does it make sense to compare it with the target.

This was useful because I initially treated parsing and resolution as one
single operation.

## Example

External response
        |
        v
     parse
        |
        v
   valid value?
      /   \
    no     yes
    |       |
 invalid   compare
