import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';


function Experience() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        Front-End Developer - Metro Holding
                    </Typography>
                    <Typography>
                        02-2021 / 02-2024
                    </Typography>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        Proje Mühendisi - Ser Elektrik
                    </Typography>
                    <Typography>
                        03-2020 / 07-2020
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography>
                        Proje ve Satın Alma Mühendisi - Kontrolmatik Teknolojileri
                    </Typography>
                    <Typography>
                        08-2018 / 02-2020
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography>
                       İhale Teklifi ve Satın Alma Mühendisi - Büyük Elektrik
                    </Typography>
                    <Typography>
                        04-2018 / 07-2018
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography>
                       Teknik Servis Mühendisi - Demir Döküm
                    </Typography>
                    <Typography>
                        06-2017 / 07-1017
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography>
                       Elektronik Bakım Mühendisi - Parkcam
                    </Typography>
                    <Typography>
                        07-2017 / 08-2017
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography>
                       Yüksek Gerilim Mühendisi - Demirer Kablo
                    </Typography>
                    <Typography>
                        07-2016 / 08-2016
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default Experience
