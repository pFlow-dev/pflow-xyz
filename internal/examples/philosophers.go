package examples

import "github.com/pflow-dev/pflow-xyz/protocol/zblob"

var (
	DiningPhilosophers = zblob.Zblob{
		Title:        "DiningPhilosophers",
		Description:  "5 philosophers + 5 chopsticks",
		Keywords:     "concurrency",
		Base64Zipped: `UEsDBAoAAAAAAAiRLlhs0OtB1wwAANcMAAAKAAAAbW9kZWwuanNvbnsKICAibW9kZWxUeXBlIjogInBldHJpTmV0IiwKICAidmVyc2lvbiI6ICJ2MCIsCiAgInBsYWNlcyI6IHsKICAgICJyaWdodDIiOiB7ICJvZmZzZXQiOiAwLCAieCI6IDgxMCwgInkiOiAxNDkgfSwKICAgICJsZWZ0MiI6IHsgIm9mZnNldCI6IDEsICJ4IjogOTQyLCAieSI6IDE1MyB9LAogICAgInJpZ2h0MyI6IHsgIm9mZnNldCI6IDIsICJ4IjogMTE4MiwgInkiOiAyMTggfSwKICAgICJsZWZ0MyI6IHsgIm9mZnNldCI6IDMsICJ4IjogMTI2MCwgInkiOiAzMzkgfSwKICAgICJyaWdodDQiOiB7ICJvZmZzZXQiOiA0LCAieCI6IDExNjksICJ5IjogNzQ0IH0sCiAgICAibGVmdDQiOiB7ICJvZmZzZXQiOiA1LCAieCI6IDEwODIsICJ5IjogODQzIH0sCiAgICAicmlnaHQ1IjogeyAib2Zmc2V0IjogNiwgIngiOiA2MzAsICJ5IjogODU2IH0sCiAgICAibGVmdDUiOiB7ICJvZmZzZXQiOiA3LCAieCI6IDUzMSwgInkiOiA3MjggfSwKICAgICJyaWdodDEiOiB7ICJvZmZzZXQiOiA4LCAieCI6IDQ0MSwgInkiOiAzNTkgfSwKICAgICJsZWZ0MSI6IHsgIm9mZnNldCI6IDksICJ4IjogNTAxLCAieSI6IDI0NCB9LAogICAgImNob3BzdGljazEiOiB7ICJvZmZzZXQiOiAxMCwgImluaXRpYWwiOiAxLCAieCI6IDgxMSwgInkiOiA0MjYgfSwKICAgICJjaG9wc3RpY2syIjogeyAib2Zmc2V0IjogMTEsICJpbml0aWFsIjogMSwgIngiOiA5MzEsICJ5IjogNDM0IH0sCiAgICAiY2hvcHN0aWNrMyI6IHsgIm9mZnNldCI6IDEyLCAiaW5pdGlhbCI6IDEsICJ4IjogOTY5LCAieSI6IDU0NSB9LAogICAgImNob3BzdGljazQiOiB7ICJvZmZzZXQiOiAxMywgImluaXRpYWwiOiAxLCAieCI6IDg2MywgInkiOiA2MTQgfSwKICAgICJjaG9wc3RpY2s1IjogeyAib2Zmc2V0IjogMTQsICJpbml0aWFsIjogMSwgIngiOiA3NzQsICJ5IjogNTM2IH0KICB9LAogICJ0cmFuc2l0aW9ucyI6IHsKICAgICJlYXQxIjogeyAieCI6IDYxMCwgInkiOiAzNzAgfSwKICAgICJ0aGluazEiOiB7ICJ4IjogMzcyLCAieSI6IDI0NyB9LAogICAgImVhdDIiOiB7ICJ4IjogODc0LCAieSI6IDI4MSB9LAogICAgInRoaW5rMiI6IHsgIngiOiA4NzYsICJ5IjogNDIgfSwKICAgICJlYXQzIjogeyAieCI6IDExMTUsICJ5IjogMzQ4IH0sCiAgICAidGhpbmszIjogeyAieCI6IDEzMDksICJ5IjogMjE1IH0sCiAgICAiZWF0NCI6IHsgIngiOiAxMDM0LCAieSI6IDY5MSB9LAogICAgInRoaW5rNCI6IHsgIngiOiAxMjI3LCAieSI6IDg5NiB9LAogICAgImVhdDUiOiB7ICJ4IjogNjczLCAieSI6IDY4OCB9LAogICAgInRoaW5rNSI6IHsgIngiOiA0ODMsICJ5IjogODg3IH0KICB9LAogICJhcmNzIjogWwogICAgeyAic291cmNlIjogImNob3BzdGljazEiLCAidGFyZ2V0IjogImVhdDEiIH0sCiAgICB7ICJzb3VyY2UiOiAiY2hvcHN0aWNrNSIsICJ0YXJnZXQiOiAiZWF0MSIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQxIiwgInRhcmdldCI6ICJsZWZ0MSIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQxIiwgInRhcmdldCI6ICJyaWdodDEiIH0sCiAgICB7ICJzb3VyY2UiOiAiZWF0MiIsICJ0YXJnZXQiOiAicmlnaHQyIiB9LAogICAgeyAic291cmNlIjogImVhdDIiLCAidGFyZ2V0IjogImxlZnQyIiB9LAogICAgeyAic291cmNlIjogImNob3BzdGljazEiLCAidGFyZ2V0IjogImVhdDIiIH0sCiAgICB7ICJzb3VyY2UiOiAiY2hvcHN0aWNrMiIsICJ0YXJnZXQiOiAiZWF0MiIgfSwKICAgIHsgInNvdXJjZSI6ICJjaG9wc3RpY2syIiwgInRhcmdldCI6ICJlYXQzIiB9LAogICAgeyAic291cmNlIjogImNob3BzdGljazMiLCAidGFyZ2V0IjogImVhdDMiIH0sCiAgICB7ICJzb3VyY2UiOiAiZWF0MyIsICJ0YXJnZXQiOiAicmlnaHQzIiB9LAogICAgeyAic291cmNlIjogImVhdDMiLCAidGFyZ2V0IjogImxlZnQzIiB9LAogICAgeyAic291cmNlIjogImNob3BzdGljazMiLCAidGFyZ2V0IjogImVhdDQiIH0sCiAgICB7ICJzb3VyY2UiOiAiY2hvcHN0aWNrNCIsICJ0YXJnZXQiOiAiZWF0NCIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQ0IiwgInRhcmdldCI6ICJsZWZ0NCIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQ0IiwgInRhcmdldCI6ICJyaWdodDQiIH0sCiAgICB7ICJzb3VyY2UiOiAidGhpbms0IiwgInRhcmdldCI6ICJjaG9wc3RpY2s0IiB9LAogICAgeyAic291cmNlIjogInRoaW5rNCIsICJ0YXJnZXQiOiAiY2hvcHN0aWNrMyIgfSwKICAgIHsgInNvdXJjZSI6ICJyaWdodDQiLCAidGFyZ2V0IjogInRoaW5rNCIgfSwKICAgIHsgInNvdXJjZSI6ICJsZWZ0NCIsICJ0YXJnZXQiOiAidGhpbms0IiB9LAogICAgeyAic291cmNlIjogImNob3BzdGljazUiLCAidGFyZ2V0IjogImVhdDUiIH0sCiAgICB7ICJzb3VyY2UiOiAiY2hvcHN0aWNrNCIsICJ0YXJnZXQiOiAiZWF0NSIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQ1IiwgInRhcmdldCI6ICJsZWZ0NSIgfSwKICAgIHsgInNvdXJjZSI6ICJlYXQ1IiwgInRhcmdldCI6ICJyaWdodDUiIH0sCiAgICB7ICJzb3VyY2UiOiAidGhpbms1IiwgInRhcmdldCI6ICJjaG9wc3RpY2s1IiB9LAogICAgeyAic291cmNlIjogInRoaW5rNSIsICJ0YXJnZXQiOiAiY2hvcHN0aWNrNCIgfSwKICAgIHsgInNvdXJjZSI6ICJsZWZ0NSIsICJ0YXJnZXQiOiAidGhpbms1IiB9LAogICAgeyAic291cmNlIjogInJpZ2h0NSIsICJ0YXJnZXQiOiAidGhpbms1IiB9LAogICAgeyAic291cmNlIjogImxlZnQxIiwgInRhcmdldCI6ICJ0aGluazEiIH0sCiAgICB7ICJzb3VyY2UiOiAicmlnaHQxIiwgInRhcmdldCI6ICJ0aGluazEiIH0sCiAgICB7ICJzb3VyY2UiOiAidGhpbmsyIiwgInRhcmdldCI6ICJjaG9wc3RpY2sxIiB9LAogICAgeyAic291cmNlIjogInRoaW5rMiIsICJ0YXJnZXQiOiAiY2hvcHN0aWNrMiIgfSwKICAgIHsgInNvdXJjZSI6ICJ0aGluazEiLCAidGFyZ2V0IjogImNob3BzdGljazEiIH0sCiAgICB7ICJzb3VyY2UiOiAidGhpbmsxIiwgInRhcmdldCI6ICJjaG9wc3RpY2s1IiB9LAogICAgeyAic291cmNlIjogInJpZ2h0MyIsICJ0YXJnZXQiOiAidGhpbmszIiB9LAogICAgeyAic291cmNlIjogImxlZnQzIiwgInRhcmdldCI6ICJ0aGluazMiIH0sCiAgICB7ICJzb3VyY2UiOiAidGhpbmszIiwgInRhcmdldCI6ICJjaG9wc3RpY2syIiB9LAogICAgeyAic291cmNlIjogInRoaW5rMyIsICJ0YXJnZXQiOiAiY2hvcHN0aWNrMyIgfSwKICAgIHsgInNvdXJjZSI6ICJyaWdodDIiLCAidGFyZ2V0IjogInRoaW5rMiIgfSwKICAgIHsgInNvdXJjZSI6ICJsZWZ0MiIsICJ0YXJnZXQiOiAidGhpbmsyIiB9CiAgXQp9UEsBAhQACgAAAAAACJEuWGzQ60HXDAAA1wwAAAoAAAAAAAAAAAAAAAAAAAAAAG1vZGVsLmpzb25QSwUGAAAAAAEAAQA4AAAA/wwAAAAA`,
		IpfsCid:      `zb2rhkUuEVJQbBAGmRvLxaY3anTXvKWCphgzZL5EZGdGpYVyZ`,
	}
)
