import { TitleCasePipe } from '@angular/common'
import { Injectable } from '@angular/core'
import { AngularFirestoreDocument } from '@angular/fire/firestore'
// import { Log } from '@interfaces/log'
import { User } from '@interfaces/user'
// import { AuthService } from '@services/auth.service'
import { FirestoreService } from '@services/firestore.service'
import { ToastService } from '@services/toast.service'
import { NewLog } from '@interfaces/log'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(
    private toast: ToastService,
    private fss: FirestoreService,
    private titlecasePipe: TitleCasePipe
  ) {}

  private checkPlural(pointsAdded: number) {
    return pointsAdded === -1 || pointsAdded === 1 ? '' : 's'
  }

  logText(pointsAdded: number, displayName: string) {
    const isPositive = pointsAdded > 0 ? true : false
    return isPositive
      ? `added ${pointsAdded} point${this.checkPlural(
          pointsAdded
        )} to ${displayName}`
      : `removed ${pointsAdded} point${this.checkPlural(
          pointsAdded
        )} from ${displayName}`
  }

  async logData(points: number, pointsAdded: number, userRef: User) {
    const displayName = this.titlecasePipe.transform(userRef.displayName)

    const dataObj: NewLog = {
      date: Date.now(),
      message: `${displayName} now has ${points} pts`,
      pointsAdded,
      pointsCurrent: points,
      userId: userRef.uid
    }

    this.fss
      .addLog(dataObj)
      .then(() => {
        this.toast.showSuccess(
          `You've ${this.logText(pointsAdded, displayName)}`
        )
      })
      .catch(error => {
        this.toast.showError(error)
      })
  }

  async updateData(userRef: AngularFirestoreDocument<User>, data: User) {
    return userRef.update(data)
  }
}
